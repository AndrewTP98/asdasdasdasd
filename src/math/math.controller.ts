import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Query,
} from '@nestjs/common';
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
    if (Number.isNaN(solution)) {
      throw new HttpException('Bad Request', HttpStatus.BAD_REQUEST);
      // return { solution: solution, messsage: 'Wrong parameters' };
    }
    return { solution: solution, messsage: 'addition ok' };
  }

  @Get('sub')
  sub(
    @Query('first') first: number,
    @Query('second') second: number,
  ): IMathResponse {
    const solution: number = this._mathService.sub(first, second);
    if (Number.isNaN(solution)) {
      throw new HttpException('Bad Request', HttpStatus.BAD_REQUEST);
    }
    return { solution: solution, messsage: 'substraction ok' };
  }

  @Get('mul')
  mul(
    @Query('first') first: number,
    @Query('second') second: number,
  ): IMathResponse {
    const solution: number = this._mathService.mul(first, second);
    if (Number.isNaN(solution)) {
      throw new HttpException('Bad Request', HttpStatus.BAD_REQUEST);
    }
    return { solution: solution, messsage: 'multiplication ok' };
  }

  @Get('div')
  div(
    @Query('first') first: number,
    @Query('second') second: number,
  ): IMathResponse {
    const solution: number = this._mathService.div(first, second);
    if (Number.isNaN(solution)) {
      throw new HttpException('Bad Request (input)', HttpStatus.BAD_REQUEST);
    }
    if (+second === 0) {
      throw new HttpException(
        'Exception divided by zero',
        HttpStatus.BAD_REQUEST,
      );
      // return { solution: 0, messsage: 'exception divided by zero' };
    }
    return { solution: solution, messsage: 'division ok' };
  }
}
