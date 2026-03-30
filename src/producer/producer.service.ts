import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { CreateMessageDto } from './dto/create-message.dto';

@Injectable()
export class ProducerService implements OnModuleInit {

  constructor(
    @Inject('KAFKA_SERVICE') private readonly kafka: ClientKafka,
  ) { }

  async onModuleInit() {
    await this.kafka.connect();
  }

  sendMessage(data: CreateMessageDto) {
    return this.kafka.emit('message-topic', data);
  }
}
