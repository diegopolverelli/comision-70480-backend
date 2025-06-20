import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {


  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {

    const req:Request=context.switchToHttp().getRequest()

    if(!req.headers.authorization) throw new UnauthorizedException(`Ingrese token`)

    // validar token

    return true;
  }
}
