import { Module } from '@nestjs/common';
import { ShotService } from './shot.service';
import { ShotController } from './shot.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ShotEntity} from "../../common/entities/shot.entity";

@Module({
  imports: [
      TypeOrmModule.forFeature([ShotEntity])
  ],
  providers: [ShotService],
  controllers: [ShotController],
  exports: [ShotService]
})
export class ShotModule {}
