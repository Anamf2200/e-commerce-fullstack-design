import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schema/user-schema';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/user-dto';
import { UpdateUserDto } from './dto/update-userdto';
import * as bcrypt from 'bcryptjs'

@Injectable()
export class UsersService {

    constructor( @InjectModel(User.name) private userModel:Model<User>){}

    async create(createUserDto:CreateUserDto & { skipHash?: boolean }):Promise<User>{
        const existing= await this.userModel.findOne({email:createUserDto.email}).exec()
        if(existing) throw new BadRequestException("Email already exsit ")
let hashed = createUserDto.password;
    if (!createUserDto.skipHash) {
        hashed = await bcrypt.hash(hashed, 10);
    }        const user=new this.userModel({
            ...createUserDto,
            password:hashed,
            role: 'user', 
        })

        return user.save()
    }

    async get():Promise<User[]>{
    const users= await this.userModel.find().exec()
    return users
    }

    async getOne(id:string):Promise<User|null>{
        const userId= await this.userModel.findById(id).exec()
        if(!userId) throw new NotFoundException("User not found")
            return userId

    }

    async update(id:string, updateUserDto:UpdateUserDto):Promise<User|null>{
const userId= await this.userModel.findById(id).exec()
if(!userId) throw new NotFoundException("User not found")
    if(updateUserDto.password){
        updateUserDto.password=await bcrypt.hash(updateUserDto.password,10)
    }

   return await this.userModel.findByIdAndUpdate(id,updateUserDto,{new:true})
    }

    async delete(id:string):Promise<User|null>{
        const user= await this.userModel.findById(id).exec()
        if(!user) throw new NotFoundException("User not found")
            return await this.userModel.findByIdAndDelete(id)
    }

    async findByEmail(email:string):Promise<User>{
        const user= await this.userModel.findOne({email}).exec()
        if(!user) throw new NotFoundException("User not found")
            return user
    }
}
