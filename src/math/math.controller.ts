import { Controller, Get, Query } from '@nestjs/common';
import { IMathResponse } from './interfaces/IMathresponse';
import { MathService } from './math.service';

@Controller('math')
export class MathController {
  constructor(private _mathService: MathService) {}

  @Get('add')
  add(
    @Query('first') first: number,
    @Query('second') second: number,
  ): IMathResponse {
    const solution: number = this._mathService.add(+first, +second);
    return { solution: solution, messsage: 'addition ok' };
  }

  @Get('sub')
  sub(
    @Query('first') first: number,
    @Query('second') second: number,
  ): IMathResponse {
    const solution: number = this._mathService.sub(first, second);
    return { solution: solution, messsage: 'substraction ok' };
  }

  @Get('mul')
  mul(
    @Query('first') first: number,
    @Query('second') second: number,
  ): IMathResponse {
    const solution: number = this._mathService.mul(first, second);
    return { solution: solution, messsage: 'multiplication ok' };
  }

  //TODO: FIX THE EXCEPTION THAT SHOULD THROW ERROR NOT RETURN ERROR
  //TODO: THINK ABOUT THE CORRECT STATUS CODE
  @Get('div')
  div(
    @Query('first') first: number,
    @Query('second') second: number,
  ): IMathResponse {
    if (+second === 0) {
      return { solution: 0, messsage: 'exception divided by zero' };
    }
    const solution: number = this._mathService.div(first, second);
    return { solution: solution, messsage: 'division ok' };
  }
}
