import { Injectable } from '@nestjs/common';
import { ProductsService } from './product.service';

@Injectable()
export class RandomService {
    constructor(public service: ProductsService) {}
    
    public getProducts(nb: number) {
       //50 = 15 + 11 + 9 + 8 + 7
      const probaRange = Math.floor(Math.random() * 50) + 1; // returns a random integer from 1 to 50
      const products = this.service.getMany(null);
       if ( probaRange <= 15 ) {

       } else if (probaRange <= 26) {

       } else if ( probaRange <= 35) {

       } else if ( probaRange <= 43) {

       }else {
            return {pouet: 'pouet'};
       }
        
    }

    private letsGetReadyToRumble(nb: number) {
        const tab = [];
        for (let index = 0; index < nb; index++) {
            tab.push( );
        }
       return  tab;
    }
}
