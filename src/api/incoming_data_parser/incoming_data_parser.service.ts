import {Injectable} from '@nestjs/common';
import {ShooterService} from "../shooter/shooter.service";
import {
    IncomingExercise,
    IncomingFlight,
    IncomingResultsDto,
    IncomingShooter, IncomingShot
} from "../../common/dto/incomingResults.dto";
import {ShooterDto} from "../../common/dto/shooter.dto";
import {ExerciseResultDto} from "../../common/dto/exercise-result.dto";
import {ExerciseResultService} from "../exercise-result/exercise-result.service";
import {ShooterEntity} from "../../common/entities/shooter.entity";
import {ExerciseResultEntity} from "../../common/entities/exerciseResult.entity";
import {FlightService} from "../flight/flight.service";
import {FlightDto} from "../../common/dto/flight.dto";
import {FlightEntity} from "../../common/entities/flight.entity";
import {ShotService} from "../shot/shot.service";
import {ShotDto} from "../../common/dto/shot.dto";
import {ShotEntity} from "../../common/entities/shot.entity";

@Injectable()
export class IncomingDataParserService {
    constructor(
        private readonly shooterService: ShooterService,
        private readonly exerciseResultService: ExerciseResultService,
        private readonly flightService: FlightService,
        private readonly shotService: ShotService
    ) {}


    async saveResults(dto: IncomingResultsDto) {
        const incomingShooters: IncomingShooter[] = dto.shooters;
        for (const incomingShooter of incomingShooters) {
            // наполнение Shooter
            const shooterDto: ShooterDto = new ShooterDto();
            Object.assign(shooterDto, incomingShooter);
            const shooter: ShooterEntity = await this.shooterService.tryToSaveAngGetSavedOrExisted(shooterDto);

            // наполнение ExersiceResult
            const incomingExercises: IncomingExercise[] = incomingShooter.exercises;
            for (const incomingExercise of incomingExercises) {
                const exerciseResultDto: ExerciseResultDto = new ExerciseResultDto();
                Object.assign(exerciseResultDto, incomingExercise);
                exerciseResultDto.shooterId = shooter.id;
                const exerciseResult: ExerciseResultEntity = await this.exerciseResultService.create(exerciseResultDto);

                // наполнение Flight
                if (exerciseResult) {
                    const incomingFlights: IncomingFlight[] = incomingExercise.flights;
                    for (const incomingFlight of incomingFlights) {
                        const flightDto: FlightDto = new FlightDto();
                        Object.assign(flightDto, incomingFlight);
                        flightDto.exerciseResultId = exerciseResult.id;
                        const flight: FlightEntity = await this.flightService.create(flightDto);

                        // наполнение Shot
                        const incomingShots: IncomingShot[] = incomingFlight.shots;
                        for (const incomingShot of incomingShots) {
                            const shotDto: ShotDto = new ShotDto();
                            Object.assign(shotDto, incomingShot);
                            shotDto.flightId = flight.id;
                            const shot: ShotEntity = await this.shotService.create(shotDto);
                        }
                    }
                }
            }
        }
    }
}




