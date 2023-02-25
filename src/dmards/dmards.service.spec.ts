import { Test, TestingModule } from '@nestjs/testing';
import { DmardsService } from './dmards.service';

describe('DmardsService', () => {
  let service: DmardsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DmardsService],
    }).compile();

    service = module.get<DmardsService>(DmardsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
