import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', 
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'cokomoko123',
      database: 'restaurants',
      entities: [User], 
      synchronize: true, 
    }),
    
    TypeOrmModule.forFeature([User])],
  providers: [UserService],
  controllers: [UserController],
  exports: [UserService]
})
export class IsocModule {}
