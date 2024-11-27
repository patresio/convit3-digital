import { Injectable } from '@nestjs/common';
import { Event, Guest } from 'core';
import { PrismaProvider } from 'src/db/prisma.provider';

@Injectable()
export class EventPrisma {
  constructor(readonly prisma: PrismaProvider) {}

  async findAll(): Promise<Event[]> {
    return this.prisma.event.findMany() as any;
  }

  async findById(id: string, complete: boolean = false): Promise<Event | null> {
    return this.prisma.event.findUnique({
      where: { id },
      include: {
        guests: complete,
      },
    }) as any;
  }

  async findBySlug(
    slug: string,
    complete: boolean = false,
  ): Promise<Event | null> {
    return this.prisma.event.findUnique({
      select: {
        id: true,
        name: true,
        description: true,
        date: true,
        location: true,
        image: true,
        bgImage: true,
        slug: true,
        password: complete,
        expectedAudience: complete,
        guests: complete,
      },
      where: { slug },
    }) as any;
  }

  saveEvent(event: Event) {
    return this.prisma.event.create({
      data: {
        ...(event as any),
        guests: {
          create: event.guests,
        },
      },
    });
  }

  saveGuest(event: Event, guest: Guest) {
    return this.prisma.guest.create({
      data: {
        ...guest,
        quantityCompanions: +(guest.quantityCompanions ?? 0),
        event: {
          connect: {
            id: event.id,
          },
        },
      },
    });
  }
}
