import { forwardRef, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  providers: [AuthService],
  controllers: [AuthController],
  imports: [
    forwardRef(() => UsersModule),
    JwtModule.register({
      secret: process.env.SECRET_KEY || 'secret',
      signOptions: {
        expiresIn: '23h'
      }
    })
  ],
  exports: [AuthService, JwtModule]
})
export class AuthModule {}
