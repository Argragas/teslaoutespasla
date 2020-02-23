import { Controller, Get, Query } from '@nestjs/common';
import { RandomService } from '../services/random.service';
import { ApiResponse, ApiQuery } from '@nestjs/swagger';

@Controller('random')
export class RandomController {

    constructor(public service: RandomService) {}

    
    @Get()
    @ApiQuery( { name: 'nb', type: Number } )
    @ApiResponse({status: 200, type: Object })
    async letsGetReadyToRumble(
         @Query( 'nb' ) nb : number,
    ) {
        console.log(nb);
        return await this.service.getProducts(nb);
    }


}
