import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcryptjs'


@Injectable()
export class AuthService {
    constructor(private userService:UsersService,private jwtService:JwtService){}

    async validateUser(email:string,password:string){
        const user= await this.userService.findByEmail(email)
        if(user && await bcrypt.compare(password,user.password)){
                    const userObj= user.toObject()
            const {password,...result}=userObj
             return result
        }
        throw new UnauthorizedException("Invalid Credentials")
    }

    async login(user:any){
        const payload={email:user.email,id:user._id,role:user.role}

        return{
            access_token: this.jwtService.sign(payload),
            user: { email: user.email, id: user._id, role: user.role }
        }
    }
}
