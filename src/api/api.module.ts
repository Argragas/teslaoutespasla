import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './models/product.entity';
import { ProductController } from './controllers/product.controller';
import { ProductsService } from './services/product.service';
import { RandomController } from './controllers/random.controller';
import { RandomService } from './services/random.service';


@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  controllers: [ProductController, RandomController],
  providers: [ProductsService, RandomService]
})
export class ApiModule {}