import {IsNotEmpty, IsNumber, IsPositive} from "class-validator";

export class ExerciseResultDto {
    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    timestamp: number;

    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    shooterId: number;
}