import { ConfigService } from '@nestjs/config';

export const jwtConstants = {
  secret: new ConfigService().get<string>('JWT_SECRET'),
};

// export const jwtConstants = {
//     secret: process.env.JWT_SECRET || 'default-secret-key',
//   };
