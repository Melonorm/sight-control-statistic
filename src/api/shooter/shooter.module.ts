import { Module } from '@nestjs/common';
import { ShooterController } from './shooter.controller';
import { ShooterService } from './shooter.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ShooterEntity} from "../../common/entities/shooter.entity";

@Module({
  imports: [TypeOrmModule.forFeature([ShooterEntity])],
  controllers: [ShooterController],
  providers: [ShooterService],
  exports: [ShooterService]
})
export class ShooterModule {}
