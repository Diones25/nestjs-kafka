import { Body, Controller, Post } from '@nestjs/common';
import { ProducerService } from './producer.service';
import { CreateMessageDto } from './dto/create-message.dto';

@Controller('producer')
export class ProducerController {
  constructor(private readonly producerService: ProducerService) { }
  
  @Post()
  sendMessage(@Body() createMessageDto: CreateMessageDto) {
    return this.producerService.sendMessage(createMessageDto);
  }
}
