import { Controller, Get } from '@nestjs/common';
import { RandomService } from '../services/random.service';
import { ApiResponse } from '@nestjs/swagger';

@Controller('random')
export class RandomController {

    constructor(public service: RandomService) {}

    
    @Get()
    @ApiQuery( { name: 'nb', type: String } )
    @ApiResponse({status: 200, type: Object })
    async letsGetReadyToRumble() {
        return await this.service.getProducts(nb);
    }


}
