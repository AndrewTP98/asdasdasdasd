import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataBasesEnum } from 'src/persistence/data-bases.enum';
import { AuthService } from './auth/auth.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtConstants } from './auth/jwt.const';
import { UserEntity } from 'src/persistence/entities/user.entity';
import { JwtStrategy } from './auth/jwt.strategy';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity], DataBasesEnum.POSTGRES),
    JwtModule.register({
      secret: JwtConstants.key,
      signOptions: { expiresIn: '60000s' },
    }),
  ],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService, JwtStrategy],
})
export class ServiceModule {}
