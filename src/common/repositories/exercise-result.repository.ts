import {dataSource} from "../../configs/typeorm.datasource";
import {ExerciseResultEntity} from "../entities/exerciseResult.entity";

export const ExerciseResultRepository = dataSource.getRepository(ExerciseResultEntity);