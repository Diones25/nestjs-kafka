import { Module } from '@nestjs/common';
import { ProducerModule } from './producer/producer.module';
import { ConsumerModule } from './consumer/consumer.module';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ProducerModule,
    ConsumerModule,
    ClientsModule.register([
      {
        name: 'KAFKA_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            brokers: ['127.0.0.1:9092'],
          },
        },
      }
    ]),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
