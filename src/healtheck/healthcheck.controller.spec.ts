import { Test, TestingModule } from '@nestjs/testing';
import { HealtheckController } from './healtheck.controller';
import { HealtheckService } from './healtheck.service';

describe('HealtheckController', () => {
  let controller: HealtheckController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HealtheckController],
      providers: [HealtheckService],
    }).compile();

    controller = module.get<HealtheckController>(HealtheckController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
