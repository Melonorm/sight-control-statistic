import {Controller, Get, Param} from '@nestjs/common';
import {ExerciseResultService} from "./exercise-result.service";

@Controller('exercise-result')
export class ExerciseResultController {
    constructor(private readonly exerciseResultService: ExerciseResultService) {
    }

    @Get('/:shooterId')
    async getAllByShooterId(@Param('shooterId') shooterId: number) {
        const results = this.exerciseResultService.findAllByShooterId(shooterId);
        return results;
    }
}
