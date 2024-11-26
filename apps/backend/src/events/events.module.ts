import { Module } from '@nestjs/common';
import { DbModule } from 'src/db/db.module';
import { EventPrisma } from './event.prisma';
import { EventsController } from './events.controller';

@Module({
  imports: [DbModule],
  controllers: [EventsController],
  providers: [EventPrisma],
})
export class EventsModule {}
