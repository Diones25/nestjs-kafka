import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';

@Controller('message')
export class MessageController {
  @EventPattern('test-topic')
  handleMessage(@Payload() data: any) {
    console.log('Mensagem recebida:', data);
  }

}
