import { Module } from '@nestjs/common';
import { MailingService } from './mailing.service';
import { ConfigService } from '@nestjs/config';
import { MailingController } from './mailing.controller';

@Module({
  providers: [MailingService, ConfigService, MailingController],
  controllers: [MailingController],
})
export class MailingModule {}
