import {Body, Controller, HttpCode, Post} from '@nestjs/common';
import {IncomingDataParserService} from "./incoming_data_parser.service";
import {IncomingResultsDto} from "../../common/dto/incomingResults.dto";

@Controller('incoming-data-parser')
export class IncomingDataParserController {
    constructor(private readonly incomingDataParserService: IncomingDataParserService) {
    }

    @HttpCode(201)
    @Post("create")
    async saveIncomingResults(@Body() dto: IncomingResultsDto) {
        console.log(dto);
        return this.incomingDataParserService.saveResults(dto);
    }


    @Post("test")
    async test(@Body() dto: {actualDate: string, infantry: number, tanks: number } ) {
        console.log(dto);
        return dto;
    }
}
