import { Controller, Get, Param } from '@nestjs/common';
import { Event, events, Id, utilsDate } from 'core';

@Controller('events')
export class EventsController {
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
  getValidEventSlug(@Param('id') id: string, @Param('slug') slug: string) {
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

  private deserializer(event: any) {
    if (!event) {
      return null;
    }
    return {
      ...event,
      date: utilsDate.parse(event.date),
    };
  }
}
