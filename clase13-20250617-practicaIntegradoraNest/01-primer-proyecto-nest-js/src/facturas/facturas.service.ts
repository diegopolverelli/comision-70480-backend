import { Injectable } from '@nestjs/common';
import { CreateFacturaDto } from './dto/create-factura.dto';
import { UpdateFacturaDto } from './dto/update-factura.dto';

@Injectable()
export class FacturasService {

  facturas:any[]

  constructor(){
    this.facturas=[
      {nroComp:"0001-00003001", importe:10_000},
      {nroComp:"0001-00003002", importe:7_400},
      {nroComp:"0001-00003003", importe:108_053},
    ]
  }

  create(createFacturaDto: CreateFacturaDto) {
    return 'This action adds a new factura';
  }

  findAll() {
    return this.facturas
  }

  findOne(id: number) {
    return `This action returns a #${id} factura`;
  }

  update(id: number, updateFacturaDto: UpdateFacturaDto) {
    return `This action updates a #${id} factura`;
  }

  remove(id: number) {
    return `This action removes a #${id} factura`;
  }
}
