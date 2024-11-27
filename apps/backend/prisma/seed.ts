import { PrismaClient } from '@prisma/client';
import { events } from 'core';

async function seed() {
  const prisma = new PrismaClient();
  const transactions = events.map(async (event) => {
    await prisma.event.create({
      data: {
        id: event.id,
        slug: event.slug,
        password: event.password,
        name: event.name,
        date: event.date,
        location: event.location,
        description: event.description,
        image: event.image,
        bgImage: event.bgImage,
        expectedAudience: event.expectedAudience,
        guests: {
          create: event.guests.map((guest) => ({
            id: guest.id,
            name: guest.name,
            email: guest.email,
            confirmation: guest.confirmation,
            hasCompanions: guest.hasCompanions,
            quantityCompanions: guest.quantityCompanions,
          })),
        },
      },
    });
  });

  await Promise.all(transactions);
}

seed();
