// import { Injectable } from '@nestjs/common';
// import { JwtService } from '@nestjs/jwt';
// import { UserService } from '../user.service';
// import { User } from '../user.entity'; 
// import * as bcrypt from 'bcryptjs';
// import { ConfigService } from '@nestjs/config';
// import { UserOutput } from '../user-output.interface';

// @Injectable()
// export class AuthService {
//   validate(sub: any) {
//       throw new Error('Method not implemented.');
//   }
//   constructor(
//     private userService: UserService,
//     private jwtService: JwtService,
//     private configService: ConfigService
//   ) {}

// //   async validateUser(username: string, password: string): Promise<User | null> {
// //     const user = await this.userService.findOne(username);
// //     if (user && bcrypt.compareSync(password, user.password)) {
// //       const { password, ...result } = user;
// //     }
// //     return null;
// //   }

// //   async login(user: User): Promise<{ accessToken: string }> {
// //     const payload = { username: user.username, sub: user.id };
// //     return {
// //       accessToken: this.jwtService.sign(payload),
// //     };
// //   }

//   async validateUser(username: string, password: string): Promise<UserOutput | null> {
//     const user = await this.userService.findOne(username);
//     if (user && bcrypt.compareSync(password, user.password)) {
//       const { password, ...result } = user;
//       return result;
//     }
//     return null;
//   }

//   async login(user: User): Promise<{ accessToken: string }> {
//     const payload = { username: user.username, sub: user.id };
//     return {
//       accessToken: this.jwtService.sign(payload),
//     };
//   }
// }
