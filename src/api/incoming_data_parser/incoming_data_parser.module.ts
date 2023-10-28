import {Module} from "@nestjs/common";
import {IncomingDataParserService} from "./incoming_data_parser.service";
import {IncomingDataParserController} from "./incoming_data_parser.controller";
import {ShooterModule} from "../shooter/shooter.module";
import {ExerciseResultModule} from "../exercise-result/exercise-result.module";
import {FlightModule} from "../flight/flight.module";
import {ShotModule} from "../shot/shot.module";

@Module({
  imports: [
      // TypeOrmModule.forFeature([
      //     ShooterEntity]
      // ),
      ShooterModule,
      ExerciseResultModule,
      FlightModule,
      ShotModule
  ],
  providers: [IncomingDataParserService],
  controllers: [IncomingDataParserController]
})
export class IncomingDataParserModule {}
