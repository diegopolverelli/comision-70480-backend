import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Res, Req } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { AuthGuard } from '../auth/auth.guard';
import { Request, Response } from 'express';

@Controller('api/productos')
export class ProductosController {
  constructor(private readonly productosService: ProductosService) {}

  @Post()
  @UseGuards(AuthGuard)
  create(@Body() createProductoDto: CreateProductoDto, @Res({passthrough: true}) res:Response, @Req() req:Request) {
    console.log(req.cookies)

    res.cookie("cookieProductos", "datos de productos...", {maxAge: 1000 * 60 *20})
    return this.productosService.create(createProductoDto);
  }

  @Get()
  findAll(@Req() req: Request) {
    console.log(req.cookies)
    return this.productosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductoDto: UpdateProductoDto) {
    return this.productosService.update(+id, updateProductoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productosService.remove(+id);
  }
}
