import { Module } from '@nestjs/common';
import { GenerosService } from './generos.service';
import { GenerosController } from './generos.controller';
import { Genero } from 'src/entities/genero.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Genero])],
  // Entities que va a utilizar el REPOSITORY
  controllers: [GenerosController],
  // Acceso mediante API REST hasta /peliculas
  providers: [GenerosService],
  // permite utilizarlo dentro de la isla, o del módulo
  exports: [GenerosService],
  // EXPORT, permite a otros módulo utilizar este Servicde
})
export class GenerosModule {}
