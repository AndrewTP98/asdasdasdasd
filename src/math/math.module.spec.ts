import { Test, TestingModule } from '@nestjs/testing';
import { MathModule } from './math.module';

describe('MathModule', () => {
  let mathModule: MathModule;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MathModule],
    }).compile();

    mathModule = module.get<MathModule>(MathModule);
  });

  it('should be defined', () => {
    expect(mathModule).toBeDefined();
  });
});
