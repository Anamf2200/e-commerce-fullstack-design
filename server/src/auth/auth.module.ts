import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from 'src/users/users.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from 'src/strategies/jwt-strategy';
import { LocalStrategy } from 'src/strategies/local-strategy';

@Module({
  imports:[UsersModule,
    PassportModule,
    JwtModule.register({
      secret:process.env.JWT_Secret,
      signOptions:{expiresIn:'1h'}
    })
  ],
  providers: [AuthService,JwtStrategy,LocalStrategy],
  controllers: [AuthController],
  exports:[AuthService]
})
export class AuthModule {}
