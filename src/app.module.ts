import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { RandomModule } from './random/random.module';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [TypeOrmModule.forRoot(), ProductModule, RandomModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}