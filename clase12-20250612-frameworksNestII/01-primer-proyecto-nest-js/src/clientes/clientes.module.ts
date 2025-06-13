import { Module } from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { ClientesController } from './clientes.controller';
import { FacturasModule } from '../facturas/facturas.module';

@Module({
  imports:[
    FacturasModule
  ],
  controllers: [ClientesController],
  providers: [ClientesService],
})
export class ClientesModule {}
