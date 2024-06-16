import { Test, TestingModule } from '@nestjs/testing';
import { IsocController } from './user.controller';

describe('IsocController', () => {
  let controller: IsocController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IsocController],
    }).compile();

    controller = module.get<IsocController>(IsocController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
