import { IsISO8601, IsNotEmpty, IsNumber, IsPositive, IsString, Min} from "class-validator";

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
    velocity: number;

    @IsNotEmpty()
    @IsNumber()
    elevation: number;

    @IsNotEmpty()
    @IsNumber()
    azimuthSpeed: number;

    @IsNotEmpty()
    @IsNumber()
    elevationSpeed: number;

    @IsNotEmpty()
    @IsNumber()
    calcHorizLead: number;

    @IsNotEmpty()
    @IsNumber()
    calcVertLead: number;

    @IsNotEmpty()
    @IsNumber()
    fireHorizLead: number;

    @IsNotEmpty()
    @IsNumber()
    fireVertLead: number;

    @IsNotEmpty()
    @IsString()
    @IsISO8601()
    shotTime: string; // "2012-04-21T18:25:43.415Z"  ISO 8601

    @IsNotEmpty()
    @IsNumber()
    flightId: number;
}