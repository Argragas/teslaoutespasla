import { Module } from '@nestjs/common';

import { RandomController } from './random.controller';
import { RandomService } from './random.service';
import { ProductsService } from '../product/services/product.service';
import { ProductModule } from 'src/product/product.module';


@Module({
  imports: [ProductModule],
  controllers: [RandomController],
  providers: [RandomService,ProductsService]
})
export class RandomModule {}