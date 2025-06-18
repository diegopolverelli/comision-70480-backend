import { IsBoolean, IsInt, IsNumber, IsOptional, IsString } from "class-validator"

export interface ProductoInterface{
    id: number, 
    code: string, 
    title: string, 
    stock?: number, 
    price: number, 
    descrip: string, 
    status: boolean
}

export interface nuevoProductoInterface{
    code: string, 
    title: string, 
    stock?: number, 
    price: number, 
    descrip: string, 
    status: boolean
}


export class NuevoProducto{

    @IsString()
    code: string
    
    @IsString()
    title: string 

    @IsInt()
    @IsOptional()
    stock?: number 

    @IsNumber()
    price: number 

    @IsString({message:`descrip es requerido y de tipo cadena de caracteres`})
    descrip: string 

    @IsBoolean()
    status: boolean

}