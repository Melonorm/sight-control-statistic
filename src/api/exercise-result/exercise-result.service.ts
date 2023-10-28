import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {ExerciseResultEntity} from "../../common/entities/exerciseResult.entity";
import {Repository} from "typeorm";
import {ExerciseResultDto} from "../../common/dto/exercise-result.dto";

@Injectable()
export class ExerciseResultService {
    constructor(
        @InjectRepository(ExerciseResultEntity) private readonly exerciseResultRepository: Repository<ExerciseResultEntity>
    ) {}

    async create(dto: ExerciseResultDto): Promise<ExerciseResultEntity> {
        const promiseExerciseResult = await this.exerciseResultRepository.findOne({
                where: {
                    shooterId: dto.shooterId,
                    timestamp: dto.timestamp
                }
            }
        );

        if (!promiseExerciseResult) {
            const exerciseResult = new ExerciseResultEntity();
            Object.assign(exerciseResult, dto);
            exerciseResult.createdAt = new Date(dto.timestamp);
            return this.exerciseResultRepository.save(exerciseResult);
        }
    }

    async findAllByShooterId(shooterId: number) {
        const results: ExerciseResultEntity[] = await this.exerciseResultRepository.find({
            where: {
                shooterId
            }
        });
        return results;
    }
}
