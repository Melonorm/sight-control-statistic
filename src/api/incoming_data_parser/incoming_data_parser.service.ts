import {Injectable} from '@nestjs/common';
import {ShooterService} from "../shooter/shooter.service";
import {IncomingResultsDto} from "../../common/dto/incomingResults.dto";
import {ShooterDto} from "../../common/dto/shooter.dto";
import {ExerciseResultDto} from "../../common/dto/exercise-result.dto";
import {ExerciseResultService} from "../exercise-result/exercise-result.service";
import {ShooterEntity} from "../../common/entities/shooter.entity";

@Injectable()
export class IncomingDataParserService {
    constructor(
        private readonly shooterService: ShooterService,
        private readonly exerciseResultService: ExerciseResultService
    ) {
    }


    async saveResults(dto: IncomingResultsDto) {
        const incomingShooters = dto.shooters;  // TODO: Типизировать
        for (const incomingShooter of incomingShooters) {
            const dto: ShooterDto = {
                firstName: incomingShooter.firstName,
                lastName: incomingShooter.lastName,
                fatherName: incomingShooter.fatherName,
                callName: incomingShooter.callName,
                yearBorn: incomingShooter.yearBorn
            };
            const shooter: ShooterEntity = await this.shooterService.tryToSaveAngGetSavedOrExisted(dto);

            const incomingExercises = incomingShooter.exercises; // TODO: Типизировать
            for (const incomingExercise of incomingExercises) {
                const dto: ExerciseResultDto = {
                    timestamp: incomingExercise.timestamp,
                    shooterId: shooter.id
                };
                await this.exerciseResultService.create(dto);
            }
        }
    }
}
