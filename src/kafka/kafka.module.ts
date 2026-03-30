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
            connectionTimeout: 10000, // Dá mais tempo para o Kafka subir
          },
          consumer: {
            groupId: 'nestjs-client-group', // Nome único para o cliente
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
