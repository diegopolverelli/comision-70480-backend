import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class PruebasMiddleware implements NestMiddleware {
  // use(req: any, res: any, next: (error?: any) => void) {
  //   throw new Error('Method not implemented.');
  // }
 
  use(req: Request, res: Response, next: () => void) {

    console.log(`Fecha: ${new Date().toLocaleDateString()} - acceso a ${req.url} - método: ${req.method}`)
    // res.send

    next();
  }
}



