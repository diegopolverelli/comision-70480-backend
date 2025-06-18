import { BadRequestException, Body, Controller, Get, Param, ParseIntPipe, Post, Query, Req, Res, ValidationPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { NuevoProducto, nuevoProductoInterface } from './interfaces/productosInterfaces';
import { Request, Response } from 'express';

@Controller("api")
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get("saludo")
  getHello(@Query("name") nombre: string): string {
    console.log(nombre)

    return this.appService.getHello();
  }

  @Get("productos")
  getProductos() {
    return this.appService.getProductos()
  }

  @Get("productos/:id")
  getProductoById(@Param("id", ParseIntPipe) id: number) {

    // id=false

    return this.appService.getProductoById(id)
  }

  @Get("suma/:a/:b")
  suma(@Param("a", new ParseIntPipe({optional:true})) a: number, @Param("b", ParseIntPipe) b: number) {

    return a + b
  }

  @Post("productos")
  creaProducto(@Body(new ValidationPipe({whitelist:true, forbidNonWhitelisted:true})) producto:NuevoProducto) {
    if(!producto.code) throw new BadRequestException(`code es requerido`)
    // console.log(producto)


    return this.appService.creaProducto(producto)
  }

  @Get("datos")
  datos(@Req() req:Request, @Res() res:Response){

    console.log(req.query)
    
    res.status(200).send("hola...!!!")
  }

}
