import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { ProductosModule } from './productos/productos.module';
import { PruebasMiddleware } from './pruebas/pruebas.middleware';

@Module({
  imports: [UsuariosModule, ProductosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule{

  configure(consumer: MiddlewareConsumer) {

    consumer.apply(PruebasMiddleware).forRoutes({path:"*", method: RequestMethod.ALL});
  }
}
