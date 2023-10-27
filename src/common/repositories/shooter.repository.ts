import {dataSource} from "../../configs/typeorm.datasource";
import {ShooterEntity} from "../entities/shooter.entity";

export const ShooterRepository = dataSource.getRepository(ShooterEntity);