import {dataSource} from "../../configs/typeorm.datasource";
import {ShotEntity} from "../entities/shot.entity";

export const ShotRepository = dataSource.getRepository(ShotEntity);