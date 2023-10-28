import {Controller, Delete, Param} from '@nestjs/common';
import {ShotService} from "./shot.service";

@Controller('shot')
export class ShotController {
    constructor(private readonly shotService: ShotService) {
    }

    @Delete("/:id")
    async delete(@Param("id") id: number) {
        return this.shotService.delete(id);
    }
}
