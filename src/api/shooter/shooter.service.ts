import {HttpException, HttpStatus, Injectable, NotFoundException} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {ShooterEntity} from "../../common/entities/shooter.entity";
import {Repository} from "typeorm";
import {ShooterDto} from "../../common/dto/shooter.dto";
import {RuntimeException} from "@nestjs/core/errors/exceptions";
import {ExerciseResultEntity} from "../../common/entities/exerciseResult.entity";
import {SHOOTER_ALREADY_EXIST_ERROR_MESSAGE, SHOOTER_NOT_FOUND_ERROR_MESSAGE} from "./constants/shooter.constants";

@Injectable()
export class ShooterService {
    constructor(
        @InjectRepository(ShooterEntity) private readonly shooterRepository: Repository<ShooterEntity>
    ) {}

    async getAll(): Promise<ShooterEntity[]> {
        return this.shooterRepository.find();
    }

    async create(dto: ShooterDto): Promise<ShooterEntity> {
        const promiseShooter = await this.shooterRepository.findOne({
            where: {
                firstName: dto.firstName,
                lastName: dto.lastName,
                yearBorn: dto.yearBorn
            }
        });
        if (promiseShooter) {
            throw new HttpException(SHOOTER_ALREADY_EXIST_ERROR_MESSAGE, HttpStatus.UNPROCESSABLE_ENTITY);
        }
        const shooter: ShooterEntity = new ShooterEntity();
        Object.assign(shooter, dto);
        return this.shooterRepository.save(shooter);
    }


    async tryToSaveAngGetSavedOrExisted(dto: ShooterDto): Promise<ShooterEntity> {
        let shooter: ShooterEntity = new ShooterEntity();
        const promiseShooter = await this.shooterRepository.findOne({
            where: {
                firstName: dto.firstName,
                lastName: dto.lastName,
                yearBorn: dto.yearBorn
            }
        });
        if (promiseShooter) {
            shooter = promiseShooter;
        }
        else {
            Object.assign(shooter, dto)
            shooter = await this.shooterRepository.save(shooter);
        }
        return shooter;
    }


    async findByImmutableCredentials(firstName: string, lastName: string, yearBorn: number ): Promise<ShooterEntity> {
        const shooter = this.shooterRepository.findOne({
            where: {
                firstName,
                lastName,
                yearBorn
            }
        });

        if (!shooter) {
            throw new HttpException(SHOOTER_NOT_FOUND_ERROR_MESSAGE, HttpStatus.NOT_FOUND);
        }
        return shooter;
    }

    async delete(id: number) {
        const shooterById: ShooterEntity = await this.shooterRepository.findOne({
            where: { id }
        });
        if (!shooterById) {
            throw new HttpException(SHOOTER_NOT_FOUND_ERROR_MESSAGE, HttpStatus.NOT_FOUND);
        }
        return this.shooterRepository.delete(shooterById);
    }

    async findById(id: number): Promise<ShooterEntity> {
        const shooter: ShooterEntity = await this.shooterRepository.findOne({
            where: { id }
        });

        if (!shooter) {
            throw new HttpException(SHOOTER_NOT_FOUND_ERROR_MESSAGE, HttpStatus.NOT_FOUND);
        }
        return shooter;
    }

}
