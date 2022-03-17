import { Controller, Body, Get, Post, Delete, Param, HttpStatus,  Res } from '@nestjs/common';
import { CreateProductDto } from '../dto/product.dto';
import { Product } from '../interfaces/product.interface';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    constructor( private readonly productService: ProductService) {}

    @Post()
    async create(@Body() createProductDto: CreateProductDto){
        this.productService.createProduct(createProductDto);
    }

    @Get('/')
    async findAll(): Promise<Product[]>{
        return this.productService.findAll();
    }

    @Get('/:id')
    async findOne(@Res() res, @Param('id') productId){
        let rdo= await this.productService.findOne(productId);
        if (!rdo) res.status(HttpStatus.NOT_FOUND)
        return res.status(HttpStatus.OK).json(rdo)
    }

    @Delete('/:id')
    async deleteProduct(@Res() res, @Param('id') productId){
        let rdo= await this.productService.deleteProduct(productId);
        if (!rdo) res.status(HttpStatus.NOT_FOUND)
        return res.status(HttpStatus.OK).json(rdo)
    }
}
