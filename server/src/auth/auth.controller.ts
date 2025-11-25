import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from 'src/guards/local-guards';
import { JWTAuthGuard } from 'src/guards/jwt-guards';
import { UsersService } from 'src/users/users.service';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService:AuthService,
        private readonly userService:UsersService
    ){}

    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Request()req){
        return this.authService.login(req.user)
    }

    @UseGuards(JWTAuthGuard)
    @Get('profile')
    async profile(@Request()req){
        const user= await this.userService.getOne(req.user.userId)
        console.log(user)
        return user
    }
}
