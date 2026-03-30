import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { CreateMessageDto } from './dto/create-message.dto';

@Injectable()
export class ProducerService {

  constructor(
    @Inject('KAFKA_SERVICE') private readonly kafka: ClientKafka,
  ) { }
  
  sendMessage(data: CreateMessageDto) {
    return this.kafka.send('message-topic', data);
  }
}
