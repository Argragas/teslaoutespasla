import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './models/product';
import { ProductController } from './controllers/product.controller';
import { ProductsService } from './services/product.service';


@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  controllers: [ProductController],
  providers: [ProductsService]
})
export class ProductModule {}