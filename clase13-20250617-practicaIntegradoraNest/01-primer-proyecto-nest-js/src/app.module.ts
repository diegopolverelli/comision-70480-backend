import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientesModule } from './clientes/clientes.module';
import { FacturasModule } from './facturas/facturas.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({envFilePath:"./.env"}),
    MongooseModule.forRoot(process.env.MONGO_URL!, {dbName: process.env.DB_NAME}),
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
