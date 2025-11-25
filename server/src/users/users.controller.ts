import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/user-dto';
import { User } from './schema/user-schema';
import { UpdateUserDto } from './dto/update-userdto';

@Controller('users')
export class UsersController {

constructor(private readonly userService:UsersService){}

@Post()
async create(@Body()createUserDto:CreateUserDto):Promise<User>{
    return await this.userService.create(createUserDto)
}

@Get()
async getAll():Promise<User[]>{
    return await this.userService.get()
}

@Get(':id')
async getbyId(@Param('id')id:string):Promise<User|null>{
    return await this.userService.getOne(id)
}
@Put(':id')
async update(@Param('id')id:string,@Body()updateUserDto:UpdateUserDto):Promise<User|{message:string}>{
   
const user= await this.userService.update(id,updateUserDto)
if(!user) throw new NotFoundException("user not found")
    return {message:'user updated successfully'}

}

@Delete(':id')
async delete(@Param('id')id:string):Promise<User|{message:string}>{
    const user= await this.userService.delete(id)
if(!user) throw new NotFoundException("user not found")
    return {message:'user deleted successfully'}
}
}
