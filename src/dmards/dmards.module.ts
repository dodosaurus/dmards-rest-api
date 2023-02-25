import { Module } from '@nestjs/common';
import { DmardsService } from './dmards.service';
import { DmardsController } from './dmards.controller';

@Module({
  controllers: [DmardsController],
  providers: [DmardsService]
})
export class DmardsModule {}
