import { IsInt, IsString } from "class-validator";

export class CreateProductDto{
    @IsString()
    name:string


    @IsInt()
        price:number

        @IsString()
    image:string
    @IsString()
    description:string

    @IsString()
    category:string
    @IsInt()
    stock:number

}