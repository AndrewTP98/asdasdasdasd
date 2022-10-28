import { Injectable } from '@nestjs/common';

@Injectable()
export class MathService {
  add(firstNum: number, secondNum: number): number {
    return firstNum + secondNum;
  }

  sub(firstNum: number, secondNum: number): number {
    return firstNum - secondNum;
  }

  mul(firstNum: number, secondNum: number): number {
    return firstNum * secondNum;
  }

  div(firstNum: number, secondNum: number): number | null {
    if (secondNum === 0) return null;
    return firstNum / secondNum;
  }
}
