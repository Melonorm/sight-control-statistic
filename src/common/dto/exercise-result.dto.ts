import {IsNotEmpty, IsNumber, IsPositive, IsString, Min} from "class-validator";

export class ExerciseResultDto {
    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    timestamp: number;

    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    difficultyLevel: number;

    @IsNotEmpty()
    @IsNumber()
    @Min(0)
    hitsCount: number;

    @IsNotEmpty()
    @IsNumber()
    @Min(0)
    targetsCount: number;

    @IsNotEmpty()
    @IsNumber()
    @Min(0)
    shellsUsed: number;

    @IsNotEmpty()
    @IsString()
    infoLevel: string;   // на стороне Android - ENUM

    @IsNotEmpty()
    @IsNumber()
    points: number;

    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    shooterId: number;
}