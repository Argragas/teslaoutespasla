import { Injectable } from '@nestjs/common';
import { ProductsService } from './product.service';
import { CrudRequest } from '@nestjsx/crud';

@Injectable()
export class RandomService {
    constructor( public service: ProductsService ) {}
    
    public getProducts(nb: number): Promise<any> {
        return new Promise(( resolve: any, reject: any ): any => {

       //50 = 15 + 11 + 9 + 8 + 7
      const probaRange = Math.floor(Math.random() * 50) + 1; // returns a random integer from 1 to 50
      const req: CrudRequest= null;
      const products = this.service.getMany(req);
      console.log(probaRange)
      console.log(nb)
      console.log(products)
      let data = [];
       if ( probaRange <= 15 ) {

       } else if (probaRange <= 26) {

       } else if ( probaRange <= 35) {

       } else if ( probaRange <= 43) {

       }else {
            data.push( {pouet: 'pouet'});
       }

       return resolve({
                    error: null,
                    count: data.length,
                    data: data,
                });
            });
        
    }

    private letsGetReadyToRumble(nb: number) {
        const tab = [];
        for (let index = 0; index < nb; index++) {
            tab.push( );
        }
       return  tab;
    }
}
