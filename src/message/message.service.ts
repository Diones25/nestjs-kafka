import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class MessageService implements OnModuleInit {

  constructor(
    @Inject('KAFKA_SERVICE') private readonly kafkaClient: ClientKafka
  ) { }

  async onModuleInit() {
    this.kafkaClient.subscribeToResponseOf('test-topic');
    await this.kafkaClient.connect();
  }

  async sendMessage() {
    return this.kafkaClient.emit('test-topic', {
      message: 'Olá Kafka 🚀',
    });
  }

}
