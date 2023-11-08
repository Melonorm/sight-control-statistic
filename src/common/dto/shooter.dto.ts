import {IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString} from "class-validator";

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

    @IsOptional()
    @IsString()
    groupName?: string;
}