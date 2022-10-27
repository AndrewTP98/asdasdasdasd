import { Module } from "@nestjs/common";
import { ServiceModule } from "src/service/service.module";

@Module({
    imports: [ServiceModule],
    controllers: [],
  })
  export class ControllerModule {}