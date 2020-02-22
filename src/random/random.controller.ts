import { Controller, Get } from '@nestjs/common';
import { RandomService } from './random.service';
import { ApiResponse } from '@nestjs/swagger';

@Controller('random')
export class RandomController {

    constructor(public service: RandomService) {}

    
    @Get()
    @ApiResponse({status: 200, type: Object })
    async letsGetReadyToRumble() {
        return await this.service.getProducts(1);
    }


}
