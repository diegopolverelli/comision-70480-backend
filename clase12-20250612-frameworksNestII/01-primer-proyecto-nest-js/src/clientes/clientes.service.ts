import { Injectable } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { Cliente } from './entities/cliente.entity';
import { FacturasService } from '../facturas/facturas.service';

@Injectable()
export class ClientesService {
  clientes:Cliente[]

  constructor(
    private facturasServicio: FacturasService  // inyeccion de dependencias
  ){
    this.clientes=[
      {
        id: 1,
        razonSocial: 'Todo para el Hogar SRL',
        cuit: '30555555559',
        ctaCte: 580_000
      }
    ]
  }

  create(createClienteDto: CreateClienteDto) {
    let id=1
    if(this.clientes.length>0){
      id=Math.max(...this.clientes.map(d=>d.id))+1
    }

    let nuevoCliente={
      id, ...createClienteDto
    }
    
    this.clientes.push(nuevoCliente)

    return nuevoCliente;
  }

  findAll() {
    return this.clientes
  }

  clientesFacturas() {
    return {
      facturas: this.facturasServicio.findAll(), 
      clientes: this.clientes
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} cliente`;
  }

  update(id: number, updateClienteDto: UpdateClienteDto) {
    return `This action updates a #${id} cliente`;
  }

  remove(id: number) {
    return `This action removes a #${id} cliente`;
  }
}
