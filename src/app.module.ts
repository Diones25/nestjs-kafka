import { Module } from '@nestjs/common';
import { ProducerModule } from './producer/producer.module';
import { ConsumerModule } from './consumer/consumer.module';
import { KafkaModule } from './kafka/kafka.module';

@Module({
  imports: [
    ProducerModule,
    ConsumerModule,
    KafkaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
