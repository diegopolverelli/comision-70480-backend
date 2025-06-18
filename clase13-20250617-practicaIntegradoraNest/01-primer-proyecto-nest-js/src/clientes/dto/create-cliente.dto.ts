import { IsNumber, IsOptional, IsString } from "class-validator"

export class CreateClienteDto {

    @IsString()
    razonSocial:string

    @IsString()
    cuit:string

    @IsNumber()
    @IsOptional()
    limiteCtaCte?:number
    
    @IsNumber()
    ctaCte:number
}
