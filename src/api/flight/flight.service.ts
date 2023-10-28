import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {FlightEntity} from "../../common/entities/flight.entity";
import {Repository} from "typeorm";
import {FlightDto} from "../../common/dto/flight.dto";

@Injectable()
export class FlightService {
    constructor(
        @InjectRepository(FlightEntity) private readonly flightRepository: Repository<FlightEntity>
    ) {}

    async create(dto: FlightDto): Promise<FlightEntity> {
        const flight: FlightEntity = new FlightEntity();
        Object.assign(flight, dto);
        return this.flightRepository.save(flight);
    }
}
