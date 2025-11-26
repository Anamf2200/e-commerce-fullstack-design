import { IsString, IsNumber, IsOptional } from 'class-validator';

export class UpdateProductDto {
  @IsString() @IsOptional()
  name?: string;

  @IsString() @IsOptional()
  price?: string;

  @IsString() @IsOptional()
  description?: string;

  @IsString() @IsOptional()
  category?: string;

  @IsString() @IsOptional()
  stock?: string;

   @IsOptional()
  image?: string; // optional for updates
}
