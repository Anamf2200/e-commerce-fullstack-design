import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './schema/product-schema';
import { Model } from 'mongoose';
import { CreateProductDto } from './dto/createProduct-dto';
import { UpdateProductDto } from './dto/updateProduct-dto';
import { exec } from 'child_process';

@Injectable()
export class ProductService {

    constructor(@InjectModel (Product.name) private productModel:Model<Product>){}

    async create(createProductDto:CreateProductDto):Promise<Product>{

    const product=await this.productModel.create(createProductDto)
    return product.save()
}

async findAllProducts():Promise<Product[]>{
    return await this.productModel.find().exec()

}

async findProductById(id:string):Promise<Product|null>{
    const product= await this.productModel.findById(id).exec()
    return product
}

async update(id:string,updateProductDto:UpdateProductDto):Promise<Product|null>{
    const product= await this.productModel.findById(id)

    if(!product) throw new NotFoundException("Product is not found")
    return await this.productModel.findByIdAndUpdate(id,updateProductDto,{new:true})
}

async remove(id:string):Promise<Product|null>{
    const product= await this.productModel.findById(id).exec()
    if(!product) throw new NotFoundException("Product is not found")
        return this.productModel.findByIdAndDelete(id)
}

async searchProduct(name?:string,category?:string):Promise<Product[]>{
    const filter:any={}

    if(name){
        filter.name={$regex:name,$options:'i'}
    }

     if(category){
        filter.category={$regex:category,$options:'i'}
    }

    return this.productModel.find(filter).exec()
}
}


