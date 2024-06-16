import { Module } from '@nestjs/common';
// import { AuthService } from './auth.service'; 
// import { AuthController } from './auth.controller';

import { PassportModule } from '@nestjs/passport';
// import { JwtStrategy } from './local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user.entity';
import { UserService } from '../user.service';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    // ConfigModule.forRoot({
    //     isGlobal: true,
    //   }),
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
      
      TypeOrmModule.forFeature([User]),
    PassportModule,
    // JwtModule.registerAsync({
    //     imports: [ConfigModule],
    //     useFactory: async (configService: ConfigService) => ({
    //       secret: configService.get<string>('JWT_SECRET'),
    //       signOptions: { expiresIn: '1w' },
    //     }),
    //     inject: [ConfigService],
    //   }),
  ],
  providers: [ UserService], //add JWT module? and auth service !!!
//   controllers: [AuthController],
//   exports: [AuthService],
})
export class AuthModule {}


// @Module({
//     imports: [
//       UserModule,
//       PassportModule,
//       JwtModule.registerAsync({
//         imports: [ConfigModule],
//         useFactory: async (configService: ConfigService) => ({
//           secret: configService.get<string>('JWT_SECRET'),
//           signOptions: { expiresIn: '1w' }, // Set the expiration to 1 week
//         }),
//         inject: [ConfigService],
//       }),
//     ],
//     providers: [AuthService, LocalStrategy, JwtStrategy],
//     controllers: [AuthController],
//     exports: [AuthService],
//   })
//   export class AuthModule {}