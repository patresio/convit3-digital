import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DbModule } from './db/db.module';
import { EventsModule } from './events/events.module';

@Module({
  imports: [EventsModule, DbModule],
  controllers: [AppController],
})
export class AppModule {}
