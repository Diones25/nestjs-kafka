import { Controller, Get } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { MessageService } from './message.service';

@Controller('message')
export class MessageController {

  constructor(private readonly messageService: MessageService) { }

  @EventPattern('test-topic')
  handleMessage(@Payload() data: any) {
    console.log('Mensagem recebida:', data);
  }

  @Get('/send')
  send() {
    return this.messageService.sendMessage();
  }
}
