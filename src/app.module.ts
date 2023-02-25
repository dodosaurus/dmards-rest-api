import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DmardsModule } from './dmards/dmards.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mongodb',
    host: 'localhost',
    port: 27017,
    database: 'main',
    entities: ['dist/**/*.entity.js'],
    synchronize: true //only for development
  }), DmardsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
