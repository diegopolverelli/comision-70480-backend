import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientesModule } from './clientes/clientes.module';
import { FacturasModule } from './facturas/facturas.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({envFilePath:"./.env"}),
    ClientesModule, 
    FacturasModule,
  ],
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
