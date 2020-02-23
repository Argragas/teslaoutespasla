import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { ProductsService } from '../services/product.service';
import { Product } from '../models/product.entity';


@Crud({
    model: {
      type: Product,
    },
  })
@Controller('product')
export class ProductController {
    constructor(public service: ProductsService) {}

    
}