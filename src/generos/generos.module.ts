import { Module } from '@nestjs/common';
import { GenerosService } from './generos.service';
import { GenerosController } from './generos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Genero } from 'src/entities/genero.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Genero])],
  // Entities que va a utiliza el REPOSITORY
  controllers: [GenerosController],
  //Acceso mediante API REST hasta /peliculas
  providers: [GenerosService],
  // permite utilizarlo dentro de la isla, o del módulo
  exports: [GenerosService], 
  //EXPORT, permite a otros módulo utiliza este Service
})
export class GenerosModule {}
