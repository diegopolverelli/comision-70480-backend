import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
  exports:[]
})
export class AppModule {

  nombre:string

  constructor(){
    this.nombre="Juan"
  }

  saludo(saludo:string){
    console.log(saludo, this.nombre)
  }
}
