import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MailingService {
  constructor(configService: ConfigService) {}

  public sendMail() {
    return 'vjfnvj';
  }
}
