import {dataSource} from "../../configs/typeorm.datasource";
import {FlightEntity} from "../entities/flight.entity";

export const FlightRepository = dataSource.getRepository(FlightEntity);