import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ConfigModule} from "@nestjs/config";
import {TypeOrmModule} from "@nestjs/typeorm";
import { IncomingDataParserModule } from './api/incoming_data_parser/incoming_data_parser.module';
import { ShooterModule } from './api/shooter/shooter.module';
import { ExerciseResultModule } from './api/exercise-result/exercise-result.module';
import { FlightModule } from './api/flight/flight.module';
import { ShotModule } from './api/shot/shot.module';
import ormconfig from "./configs/typeorm.config";

@Module({
  imports: [
      ConfigModule.forRoot(),
      TypeOrmModule.forRoot(ormconfig),
      IncomingDataParserModule,
      ShooterModule,
      ExerciseResultModule,
      FlightModule,
      ShotModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
