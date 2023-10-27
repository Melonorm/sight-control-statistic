import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {ShooterEntity} from "../../common/entities/shooter.entity";
import {Repository} from "typeorm";
import {ShooterDto} from "../../common/dto/shooter.dto";
import {RuntimeException} from "@nestjs/core/errors/exceptions";

@Injectable()
export class ShooterService {
    constructor(
        @InjectRepository(ShooterEntity) private readonly shooterRepository: Repository<ShooterEntity>
    ) {}

    async getAll(): Promise<ShooterEntity[]> {
        return this.shooterRepository.find();
    }

    async create(dto: ShooterDto): Promise<ShooterEntity> | null {
        const promiseShooter = await this.shooterRepository.findOne({
            where: {
                firstName: dto.firstName,
                lastName: dto.lastName,
                yearBorn: dto.yearBorn
            }
        });
        if (!promiseShooter) {
            const shooter: ShooterEntity = new ShooterEntity();
            Object.assign(shooter, dto);
            return this.shooterRepository.save(shooter);
        }
    }

    async tryToSaveAngGetSavedOrExisted(dto: ShooterDto): Promise<ShooterEntity> {
        let shooter: ShooterEntity;
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
            throw new NotFoundException("ШУТЕР НЕ НАЙДЕН"); // TODO: RE
        }
        return shooter;
    }

}
