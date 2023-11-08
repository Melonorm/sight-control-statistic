import {ExerciseResultService} from "./exercise-result.service";
import {Controller} from "@nestjs/common";

@Controller('mvc/exercise_results')
export class ExerciseResultMvcController {
    constructor(private readonly exerciseResultService: ExerciseResultService) {
    }
}