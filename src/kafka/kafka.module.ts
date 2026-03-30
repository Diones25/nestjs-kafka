import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { Partitioners } from 'kafkajs';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'KAFKA_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'nestjs-app',
            brokers: ['127.0.0.1:9092'],
            connectionTimeout: 10000, 
          },
          consumer: {
            groupId: 'main-app-consumer', 
          },
          producer: {
            createPartitioner: Partitioners.LegacyPartitioner,
          }
        }
      }
    ]),
  ],
  exports: [ClientsModule]
})
export class KafkaModule { }
