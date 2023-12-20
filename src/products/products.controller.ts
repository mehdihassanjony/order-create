import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import ProductsService from './products.service';
import CreateProductDto from './dto/createProduct.dto';
import UpdateProductDto from './dto/updateProduct.dto';

@Controller('products')
export default class ProductsController {
  constructor(
    private readonly productsService: ProductsService
  ) {}

  @Get()
  getAllProducts() {
    return this.productsService.getAllProducts();
  }

  @Get(':id')
  getProductById(@Param('id') id: string) {
    return this.productsService.getProductById(Number(id));
  }

  @Post()
  async createProduct(@Body() product: CreateProductDto) {
    return this.productsService.createProduct(product);
  }

  @Put(':id')
  async replaceProduct(@Param('id') id: string, @Body() product: UpdateProductDto) {
    return this.productsService.updateProduct(Number(id), product);
  }

  @Delete(':id')
  async deleteProduct(@Param('id') id: string) {
    return this.productsService.deleteProduct(Number(id));
  }
}
