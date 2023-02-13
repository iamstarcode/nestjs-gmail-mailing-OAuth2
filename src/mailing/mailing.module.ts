import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MailingService } from './mailing.service';
import { MailingController } from './mailing.controller';

@Module({
  providers: [MailingService, ConfigService],
  controllers: [MailingController],
})
export class MailingModule {}
