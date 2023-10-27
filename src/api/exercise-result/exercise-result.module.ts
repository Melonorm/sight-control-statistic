import { Module } from '@nestjs/common';
import { ExerciseResultService } from './exercise-result.service';
import { ExerciseResultController } from './exercise-result.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ExerciseResultEntity} from "../../common/entities/exerciseResult.entity";

@Module({
  imports: [
      TypeOrmModule.forFeature([ExerciseResultEntity])
  ],
  providers: [ExerciseResultService],
  controllers: [ExerciseResultController],
  exports: [ExerciseResultService]
})
export class ExerciseResultModule {}
