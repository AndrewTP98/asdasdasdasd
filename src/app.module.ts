import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ControllerModule } from './controller/controller.module';
import { DataBasesEnum } from './persistence/data-bases.enum';
import { ServiceModule } from './service/service.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      name: DataBasesEnum.POSTGRES,
      type: DataBasesEnum.POSTGRES,
      host: process.env.DB_URL || 'localhost',
      port: 5432,
      username: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASS || 'mytunes2022',
      database: process.env.DB_NAME || 'mytunes',
      entities: [__dirname + '/persistence/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    ControllerModule,
    ServiceModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
