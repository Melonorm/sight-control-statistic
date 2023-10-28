import { Module } from '@nestjs/common';
import { FlightService } from './flight.service';
import { FlightController } from './flight.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {FlightEntity} from "../../common/entities/flight.entity";

@Module({
  imports: [
      TypeOrmModule.forFeature([FlightEntity])
  ],
  providers: [FlightService],
  controllers: [FlightController],
  exports: [FlightService]
})
export class FlightModule {}
