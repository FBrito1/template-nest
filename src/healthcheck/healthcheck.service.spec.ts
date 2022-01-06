import { ConfigModule } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { HealthcheckService } from './healthcheck.service';

describe('HealtheckService', () => {
  let service: HealthcheckService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule],
      providers: [HealthcheckService],
    }).compile();

    service = module.get<HealthcheckService>(HealthcheckService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
