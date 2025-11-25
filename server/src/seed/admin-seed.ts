import { NestFactory } from "@nestjs/core";
import { AppModule } from "../app.module";
import { UsersService } from "../users/users.service";
import * as bcrypt from 'bcryptjs'

async function seeding() {
    const app = await NestFactory.createApplicationContext(AppModule)
    const userService= app.get(UsersService)

    const adminEmail="admin@gmail.com"
const existingEmail = await userService.findByEmail(adminEmail).catch(() => null);

    if(!existingEmail){
        await userService.create({
            name:'admin',
            email:adminEmail,
            password:'admin@123',
            role:'admin'
        })
          console.log('Admin user created');
  } else {
    console.log('Admin already exists');
  
    }
    await app.close()
    
}
seeding()