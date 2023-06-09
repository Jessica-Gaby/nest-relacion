import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsModule } from './items/items.module';

@Module({
  imports: [ItemsModule], //en impirt se exporta los componentes
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
