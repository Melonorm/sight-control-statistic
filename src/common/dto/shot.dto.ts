import {IsNotEmpty, IsNumber, IsPositive, Min} from "class-validator";

export class ShotDto {
    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    distance: number;

    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    height: number;

    @IsNotEmpty()
    @IsNumber()
    @Min(0)
    accuracy: number;

    @IsNotEmpty()
    @IsNumber()
    flightId: number;
}