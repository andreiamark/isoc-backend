// import { Injectable, UnauthorizedException } from '@nestjs/common';
// import { PassportStrategy } from '@nestjs/passport';
// import { Strategy } from 'passport-local';
// import { AuthService } from './auth.service';

// import { ConfigService } from '@nestjs/config';

// // @Injectable()
// // export class LocalStrategy extends PassportStrategy(Strategy) {
// //   constructor(private authService: AuthService) {
// //     super();
// //   }

// //   async validate(username: string, password: string): Promise<UserOutput> {
// //     const user = await this.authService.validateUser(username, password);
// //     if (!user) {
// //       throw new UnauthorizedException();
// //     }
// //     return user;
// //   }
// // }
// @Injectable()
// export class JwtStrategy extends PassportStrategy(Strategy) {
//   constructor(
//     private readonly authService: AuthService,
//     private readonly configService: ConfigService,
//   ) {
//     super({
//       jwtFromRequest: df.fromAuthHeaderAsBearerToken(),
//       ignoreExpiration: false,
//       secretOrKey: configService.get<string>('JWT_SECRET'),
//     });
//   }

//   async validate(payload: any) {
//     const user = await this.authService.validate(payload.sub); // Use validateUser method
//     if (!user) {
//       throw new UnauthorizedException();
//     }
//     return user;
//   }
// }