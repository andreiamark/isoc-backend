import { Test, TestingModule } from '@nestjs/testing';
import { IsocService } from './user.service';

describe('IsocService', () => {
  let service: IsocService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IsocService],
    }).compile();

    service = module.get<IsocService>(IsocService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
