import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {ShotEntity} from "../../common/entities/shot.entity";
import {Repository} from "typeorm";
import {ShotDto} from "../../common/dto/shot.dto";

@Injectable()
export class ShotService {
    constructor(
        @InjectRepository(ShotEntity) private readonly shotRepository: Repository<ShotEntity>
    ) {}

    async create(dto: ShotDto): Promise<ShotEntity> {
        const shot: ShotEntity = new ShotEntity();
        Object.assign(shot, dto);
        return this.shotRepository.save(shot);
    }

    async delete(id: number) {
        const shotById: ShotEntity = await this.shotRepository.findOneBy({ id });
        if (shotById) {
            return this.shotRepository.delete(shotById);
        }
    }
}
