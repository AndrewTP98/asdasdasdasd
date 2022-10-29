import { HttpException, HttpStatus } from '@nestjs/common';
import { MathController } from './math.controller';
import { MathService } from './math.service';

describe('Math controller', () => {
  let mathController: MathController;
  let mathService: MathService;

  beforeEach(() => {
    mathService = new MathService();
    mathController = new MathController(mathService);
  });
  //adition
  describe('add', () => {
    it('should return the add between two numbers', async () => {
      const number1 = 1;
      const number2 = 2;
      const addResutl = 3;
      const result = { messsage: 'addition ok', solution: addResutl };
      jest.spyOn(mathService, 'add').mockImplementation(() => addResutl);

      expect(await mathController.add(number1, number2)).toStrictEqual(result);
    });
    it('should return Bad Request error if input is not a number', async () => {
      const number1 = 1;
      const number2 = 2;
      const addResutl = NaN;
      const result = new HttpException('Bad Request', HttpStatus.BAD_REQUEST);
      jest.spyOn(mathService, 'add').mockImplementation(() => addResutl);
      expect(() => {
        mathController.add(number1, number2);
      }).toThrowError(result);
    });
  });
  //substraction
  describe('sub', () => {
    it('should return the substraction between two numbers', async () => {
      const number1 = 1;
      const number2 = 2;
      const subResutl = -1;
      const result = { messsage: 'substraction ok', solution: subResutl };
      jest.spyOn(mathService, 'sub').mockImplementation(() => subResutl);

      expect(await mathController.sub(number1, number2)).toStrictEqual(result);
    });
    it('should return Bad Request error if input is not a number', async () => {
      const number1 = 1;
      const number2 = 2;
      const subResutl = NaN;
      const result = new HttpException('Bad Request', HttpStatus.BAD_REQUEST);
      jest.spyOn(mathService, 'sub').mockImplementation(() => subResutl);
      expect(() => {
        mathController.sub(number1, number2);
      }).toThrowError(result);
    });
  });
  //product
  describe('mul', () => {
    it('should return the product between two numbers', async () => {
      const number1 = 8;
      const number2 = 2;
      const mulResutl = 16;
      const result = { messsage: 'multiplication ok', solution: mulResutl };
      jest.spyOn(mathService, 'mul').mockImplementation(() => mulResutl);

      expect(await mathController.mul(number1, number2)).toStrictEqual(result);
    });
    it('should return Bad Request error if input is not a number', async () => {
      const number1 = 2;
      const number2 = 2;
      const mulResutl = NaN;
      const result = new HttpException('Bad Request', HttpStatus.BAD_REQUEST);
      jest.spyOn(mathService, 'mul').mockImplementation(() => mulResutl);
      expect(() => {
        mathController.mul(number1, number2);
      }).toThrowError(result);
    });
  });
  //quotient
  describe('div', () => {
    it('should return the quotient between two numbers', async () => {
      const number1 = 8;
      const number2 = 2;
      const divResutl = 4;
      const result = { messsage: 'division ok', solution: divResutl };
      jest.spyOn(mathService, 'div').mockImplementation(() => divResutl);

      expect(await mathController.div(number1, number2)).toStrictEqual(result);
    });
    it('should return div by 0 error if second is 0', async () => {
      const number1 = 6;
      const number2 = 0;
      const divResutl = Infinity;
      const result = new HttpException(
        'Exception divided by zero',
        HttpStatus.BAD_REQUEST,
      );
      jest.spyOn(mathService, 'div').mockImplementation(() => divResutl);
      expect(() => {
        mathController.div(number1, number2);
      }).toThrowError(result);
    });
    it('should return Bad Request error if input is not a number', async () => {
      const number1 = 6;
      const number2 = 2;
      const divResutl = NaN;
      const result = new HttpException(
        'Bad Request (input)',
        HttpStatus.BAD_REQUEST,
      );
      jest.spyOn(mathService, 'div').mockImplementation(() => divResutl);
      expect(() => {
        mathController.div(number1, number2);
      }).toThrowError(result);
    });
  });
});
