import {Controller, Get, Param, Render} from "@nestjs/common";
import {ShooterService} from "./shooter.service";
import {ShooterEntity} from "../../common/entities/shooter.entity";

@Controller('mvc/shooter')
export class ShooterMvcController {
    constructor(private readonly shooterService: ShooterService) {
    }

    @Get()
    @Render('index')
    async getAll() {
        const shooters: ShooterEntity[] = await this.shooterService.getAll();
        return { shooters: shooters };
    }

    @Get('/:id')
    @Render('shooter_details')
    async getById(@Param("id") id: number) {
        const shooter: ShooterEntity = await this.shooterService.findById(id);
        return {
            shooter: shooter
        };
    }


}