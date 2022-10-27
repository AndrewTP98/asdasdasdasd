import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DataBasesEnum } from "src/persistence/data-bases.enum";

@Module({
    imports: [
      TypeOrmModule.forFeature(
        [],
        DataBasesEnum.POSTGRES,
      ),
    ],
    providers: [
    ],
    exports: [
    ],
  })
  export class ServiceModule { }  