import { Type } from "class-transformer";
import { IsInt, IsOptional, IsString } from "class-validator";

export class CreateProductDto{
    @IsString()
    name:string

  @Type(() => Number)

    @IsInt()
        price:number

        @IsOptional()
        @IsString()
    image?:string
    @IsString()
    description:string

    @IsString()
    category:string
      @Type(() => Number)

    @IsInt()
    stock:number

}