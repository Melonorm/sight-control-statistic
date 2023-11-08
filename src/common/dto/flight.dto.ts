import {IsNotEmpty, IsNumber, IsPositive} from "class-validator";

export class FlightDto {
    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    speed: number;

    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    height: number;

    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    no: number;

    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    startX: number;

    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    startY: number;

    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    finishX: number;

    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    finishY: number;

    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    durationSec: number;

    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    lengthPlan: number;

    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    heading: number;


    @IsNotEmpty()
    @IsNumber()
    exerciseResultId: number;
}