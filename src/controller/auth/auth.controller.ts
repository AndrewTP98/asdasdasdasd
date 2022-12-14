import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { LoginAuthDto } from 'src/dto/login-auth.dto';
import { RegisterAuthDto } from 'src/dto/register-auth.dto';
import { AuthService } from 'src/service/auth/auth.service';
import { JwtAuthGuard } from 'src/service/auth/jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  register(@Body() registerDto: RegisterAuthDto) {
    return this.authService.register(registerDto);
  }

  @Post('login')
  login(@Body() loginDto: LoginAuthDto) {
    return this.authService.login(loginDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('prueba')
  mostrar() {
    return 'todo ok';
  }
}
