import { Injectable } from '@nestjs/common';
import type { PrismaProvider } from 'src/db/prisma.provider';

@Injectable()
export class EventPrisma {
  constructor(readonly prisma: PrismaProvider) {}
}
