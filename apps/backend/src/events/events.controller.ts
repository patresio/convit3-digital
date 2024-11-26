import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Event, events, Id, utilsDate } from 'core';

@Controller('events')
export class EventsController {
  // ADMIN Events
  @Post('access/')
  async accessEvents(@Body() body: { id: string; password: string }) {
    const event = events.find(
      (event) => event.id === body.id && event.password === body.password,
    );
    if (!event) {
      throw new Error("Password or id doesn't match");
    }
    return this.serializer(event);
  }

  // GET Events
  @Get()
  asyncgetEvents() {
    return events.map(this.serializer);
  }

  @Get(':idOrSlug')
  async getEvent(@Param('idOrSlug') idOrSlug: string) {
    if (Id.validation(idOrSlug)) {
      return this.serializer(events.find((event) => event.id === idOrSlug));
    } else {
      return this.serializer(events.find((event) => event.slug === idOrSlug));
    }
  }

  @Get('validation/:slug/:id')
  async getValidEventSlug(
    @Param('slug') slug: string,
    @Param('id') id: string,
  ) {
    const event = events.find((event) => event.slug === slug);
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
