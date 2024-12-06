import {
  Body,
  Controller,
  Get,
  HttpException,
  Param,
  Post,
} from '@nestjs/common';
import {
  Event,
  Guest,
  Id,
  utilsDate,
  validateEventDataConsistency,
  validateGuestDataConsistency,
} from 'core';
import { EventPrisma } from './event.prisma';

@Controller('events')
export class EventsController {
  constructor(readonly repository: EventPrisma) {}
  // Save Events and Guest
  @Post()
  async createEvent(@Body() event: Event) {
    const existingEvent = await this.repository.findBySlug(event.slug);
    if (existingEvent && existingEvent.id !== event.id) {
      throw new Error('Exist event with same slug');
    }
    const eventComplete = validateEventDataConsistency(
      this.deserializer(event),
    );
    await this.repository.saveEvent(eventComplete);
  }

  @Post(':slug/guest')
  async createGuest(
    @Param('slug') slug: string,
    @Body() body: { guest: Guest },
  ) {
    const event = await this.repository.findBySlug(slug);
    if (!event) {
      throw new HttpException('Event not found', 400);
    }
    const guestComplete = validateGuestDataConsistency(body.guest);

    await this.repository.saveGuest(event, guestComplete);
  }
  // ADMIN Events
  @Post('access')
  async accessEvents(@Body() body: { id: string; password: string }) {
    const event = await this.repository.findById(body.id, true);
    if (!event) {
      throw new HttpException('Event not found', 400);
    }
    if (event.password !== body.password) {
      throw new HttpException("Password or id doesn't match", 400);
    }
    return this.serializer(event);
  }

  // GET Events
  @Get()
  async getEvents() {
    const events = await this.repository.findAll();
    return events.map(this.serializer);
  }

  @Get(':idOrSlug')
  async getEvent(@Param('idOrSlug') idOrSlug: string) {
    let event: Event = null;
    if (Id.validation(idOrSlug)) {
      event = await this.repository.findById(idOrSlug);
      return this.serializer(event);
    } else {
      event = await this.repository.findBySlug(idOrSlug);
      return this.serializer(event);
    }
  }

  @Get('validation/:slug/:id')
  async getValidEventSlug(
    @Param('slug') slug: string,
    @Param('id') id: string,
  ) {
    const event = await this.repository.findBySlug(slug);
    return { valid: !event || event.id === id };
  }

  // methods private

  private serializer(event: Event) {
    if (!event) {
      return null;
    }
    return {
      ...event,
      date: utilsDate.format(event.date),
    };
  }

  private deserializer(event: any): Event {
    if (!event) {
      return null;
    }
    return {
      ...event,
      date: utilsDate.parse(event.date),
    };
  }
}
