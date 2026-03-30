import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';

@Controller('consumer')
export class ConsumerController {
  @EventPattern('message-topic')
  handleMessage(@Payload() message: any) {
    console.log('Received message:', message);
  }
}
