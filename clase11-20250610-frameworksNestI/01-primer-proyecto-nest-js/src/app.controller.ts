import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller("api")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("saludo")
  getHello(@Query("name") nombre:string): string {
    console.log(nombre)

    return this.appService.getHello();
  }

  @Get("productos")
  getProductos(){
    return this.appService.getProductos()
  }

}
