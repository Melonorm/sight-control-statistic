import {IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString} from "class-validator";
import {ExerciseResultDto} from "./exercise-result.dto";

export class ShooterDto {
    @IsNotEmpty()
    @IsString()
    firstName: string;

    @IsNotEmpty()
    @IsString()
    lastName: string;

    @IsOptional()
    @IsString()
    fatherName?: string;

    @IsOptional()
    @IsString()
    callName?: string;  // позывной

    @IsOptional()
    @IsNumber()
    @IsPositive()
    yearBorn?: number;
}