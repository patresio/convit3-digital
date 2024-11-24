import { Controller, Get, Param } from '@nestjs/common';
import { Event, events, Id, utilsDate } from 'core';

@Controller('events')
export class EventsController {
  @Get()
  async findEvents() {
    return events.map(this.serializer);
  }

  @Get(':idOrSlug')
  async findEvent(@Param('idOrSlug') idOrSlug: string) {
    if (Id.validation(idOrSlug)) {
      return this.serializer(events.find((event) => event.id === idOrSlug));
    } else {
      return this.serializer(events.find((event) => event.slug === idOrSlug));
    }
  }

  @Get('/validate/:slug/:id')
  async validateSlug(@Param('slug') slug: string, @Param('id') id: string) {
    const event = events.find((event) => event.slug === slug);
    return { valid: !event || event.id === id };
  }

  private serializer(event: Event) {
    if (!event) {
      return null;
    }
    return {
      ...event,
      data: utilsDate.format(event.date),
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
