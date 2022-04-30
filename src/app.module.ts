import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { CacheModule } from './cache/cache.module';
import { QueueModule } from './queue/queue.module';
import { ConfigModule } from '@nestjs/config';
import config from './config/config';
import { BullModule } from '@nestjs/bull';

@Module({
  imports: [
    UsersModule,
    DatabaseModule,
    CacheModule,
    QueueModule,
    ConfigModule.forRoot({ load: [config] }),
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
