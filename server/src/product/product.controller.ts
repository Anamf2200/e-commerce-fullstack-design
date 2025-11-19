import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put, Query } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/createProduct-dto';
import { UpdateProductDto } from './dto/updateProduct-dto';
import { Product } from './schema/product-schema';

@Controller('product')
export class ProductController {
    constructor(private readonly productService:ProductService){}

    @Post()
    async create(@Body()createProductDto:CreateProductDto):Promise<Product>{
        return this.productService.create(createProductDto)
    }
@Get('search')
async search(@Query('name')name?:string,@Query('category')category?:string):Promise<Product[]|{message:string}>{
    const product= await this.productService.searchProduct(name,category)
    if(product.length===0) throw new NotFoundException("Product not found")
        return product
}


    @Get()
    async getAll():Promise<Product[]>{
        return this.productService.findAllProducts()

    }

    @Get(':id')
    async findById(@Param('id')id:string):Promise<Product|null>{
        return this.productService.findProductById(id)
    }

    @Put(':id')
    async update(@Param('id')id:string,@Body()updateProductDto:UpdateProductDto):Promise<Product|{message:string}>{
        const product= await this.productService.update(id,updateProductDto)
        if(!product) throw new NotFoundException("Product not found")
            return {message:"Product updated successfully"}
    }

    @Delete(':id')
    async remove(@Param('id')id:string):Promise<Product|{message:string}>{
        const product=await this.productService.remove(id)
        if(!product) throw new NotFoundException("Product not found")
        return {message:"Product deleted successfully"}


    }


}
