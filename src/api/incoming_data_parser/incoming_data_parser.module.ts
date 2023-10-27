import {Module} from "@nestjs/common";
import {IncomingDataParserService} from "./incoming_data_parser.service";
import {IncomingDataParserController} from "./incoming_data_parser.controller";
import {TypeOrmModule} from "@nestjs/typeorm";
import {ShooterEntity} from "../../common/entities/shooter.entity";
import {ShooterModule} from "../shooter/shooter.module";
import {ExerciseResultModule} from "../exercise-result/exercise-result.module";

@Module({
  imports: [
      TypeOrmModule.forFeature([
          ShooterEntity]
      ),
      ShooterModule,
      ExerciseResultModule
  ],
  providers: [IncomingDataParserService],
  controllers: [IncomingDataParserController]
})
export class IncomingDataParserModule {}
