import {Body, Controller, Get, Post} from '@nestjs/common';
import {ShooterService} from "./shooter.service";
import {ShooterDto} from "../../common/dto/shooter.dto";

@Controller('shooter')
export class ShooterController {
    constructor(private readonly shooterService: ShooterService) {
    }

    @Post("create")
    async save(@Body() dto: ShooterDto) {
        return this.shooterService.create(dto);
    }

    @Get("all")
    async getAll() {
        return this.shooterService.getAll();
    }

}
