import {IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString} from "class-validator";

export class FlightDto {
    @IsOptional()
    @IsString()
    type?: string;

/*
    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
*/
    speed: number;

    @IsNotEmpty()
    @IsNumber()
    exerciseResultId: number;
}