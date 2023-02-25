import { Test, TestingModule } from '@nestjs/testing';
import { DmardsController } from './dmards.controller';
import { DmardsService } from './dmards.service';

describe('DmardsController', () => {
  let controller: DmardsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DmardsController],
      providers: [DmardsService],
    }).compile();

    controller = module.get<DmardsController>(DmardsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
