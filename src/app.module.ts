import { Module } from '@nestjs/common';
import { KafkaModule } from './kafka/kafka.module';
import { MessageModule } from './message/message.module';

@Module({
  imports: [KafkaModule, MessageModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
