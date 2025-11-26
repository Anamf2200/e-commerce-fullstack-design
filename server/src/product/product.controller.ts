import { BadRequestException, Body, Controller, Delete, Get, NotFoundException, Param, Post, Put, Query, Req, Request, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/createProduct-dto';
import { UpdateProductDto } from './dto/updateProduct-dto';
import { Product } from './schema/product-schema';
import { JWTAuthGuard } from 'src/guards/jwt-guards';
import { RolesGuard } from 'src/guards/roles-guard';
import { Roles } from 'src/roles/role-decorator';
import { diskStorage } from 'multer';

import { FileInterceptor } from '@nestjs/platform-express';
import { extname } from 'path';
import { SkipValidationPipe } from 'src/skipValidationPipe';

@Controller('product')
export class ProductController {
    constructor(private readonly productService:ProductService){}
@UseGuards(JWTAuthGuard,RolesGuard)
@Roles("admin")
  @Post()
@UseInterceptors(FileInterceptor('image', {
  storage: diskStorage({
    destination: './uploads',
    filename: (req, file, cb) => {
      const ext = extname(file.originalname);
      const uniqueName = `${file.fieldname}-${Date.now()}${ext}`;
      cb(null, uniqueName);
    },
  }),
}))
async create(@UploadedFile() image: Express.Multer.File, @Body() createProductDto: CreateProductDto) {
  if (!image) {
    throw new BadRequestException('Image file is required');
  }
  createProductDto.image = image.filename;
  return this.productService.create(createProductDto);
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
@UseGuards(JWTAuthGuard, RolesGuard)
@Roles("admin")
@UseInterceptors(FileInterceptor('image', {
  storage: diskStorage({
    destination: './uploads',
    filename: (req, file, cb) => {
      const ext = extname(file.originalname);
      cb(null, `image-${Date.now()}${ext}`);
    },
  }),
}))
async update(
  @Param('id') id: string,
  @UploadedFile() file: Express.Multer.File,
  @Body() body: any
) {
  const updatedData: any = { ...body };

  if (file) {
    updatedData.image = file.filename; // Only update if new file uploaded
  }

  return this.productService.update(id, updatedData);
}











 




    @Delete(':id')
    @UseGuards(JWTAuthGuard,RolesGuard)
    @Roles('admin')
    async remove(@Param('id')id:string):Promise<Product|{message:string}>{
        const product=await this.productService.remove(id)
        if(!product) throw new NotFoundException("Product not found")
        return {message:"Product deleted successfully"}


    }


}


