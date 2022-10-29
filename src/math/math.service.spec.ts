import { Test, TestingModule } from '@nestjs/testing';
import { MathService } from './math.service';

describe('MathService', () => {
  let service: MathService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MathService],
    }).compile();

    service = module.get<MathService>(MathService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  //addition
  describe('add service', () => {
    it('should return the add between two numbers', async () => {
      const number1 = 1;
      const number2 = 2;
      expect(service.add(number1, number2)).toEqual(number1 + number2);
    });
  });
  //substraction
  describe('sub service', () => {
    it('should return the substraction between two numbers', async () => {
      const number1 = 5;
      const number2 = 2;
      expect(service.sub(number1, number2)).toEqual(number1 - number2);
    });
  });
  //product
  describe('mul service', () => {
    it('should return the product between two numbers', async () => {
      const number1 = 5;
      const number2 = 5;
      expect(service.mul(number1, number2)).toEqual(number1 * number2);
    });
  });
  //division
  describe('div service', () => {
    it('should return the quotient between two numbers', async () => {
      const number1 = 125;
      const number2 = 5;
      expect(service.div(number1, number2)).toEqual(number1 / number2);
    });
    it('should return null if number2 is 0', async () => {
      const number1 = 125;
      const number2 = 0;
      expect(service.div(number1, number2)).toBe(null);
    });
  });
});
