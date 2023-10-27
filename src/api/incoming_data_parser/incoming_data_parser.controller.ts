import {Body, Controller, Get, Post} from '@nestjs/common';
import {IncomingDataParserService} from "./incoming_data_parser.service";
import {IncomingResultsDto} from "../../common/dto/incomingResults.dto";
import {ShooterDto} from "../../common/dto/shooter.dto";

@Controller('incoming-data-parser')
export class IncomingDataParserController {
    constructor(private readonly incomingDataParserService: IncomingDataParserService) {
    }

    @Post("create")
    async saveIncomingResults(@Body() dto: IncomingResultsDto) {
        return this.incomingDataParserService.saveResults(dto);
    }
}
