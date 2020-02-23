import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiModule } from './api/api.module';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
     imports: [TypeOrmModule.forRoot({
      "type": "sqlite",
      "database": "database.db",
      "synchronize": true,
      "logging": false,
      "entities": [ "dist/api/models/product.entity.js"]
}),ApiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}