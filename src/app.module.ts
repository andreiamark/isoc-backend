import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IsocModule } from './isoc/isoc.module';
import { AuthModule } from './isoc/auth/auth.module';

@Module({
  imports: [IsocModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
