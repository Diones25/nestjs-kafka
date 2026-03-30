import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class ProducerService {

  constructor(
    @Inject('KAFKA_SERVICE') private readonly kafka: ClientKafka,
  ) { }
  
  sendMessage(data: any) {
    return this.kafka.send('message-topic', data);
  }
}
