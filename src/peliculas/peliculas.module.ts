import { Module } from '@nestjs/common';
import { PeliculasService } from './peliculas.service';
import { PeliculasController } from './peliculas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Peliculas } from 'src/entities/pelicula.entity';
import { Genero } from 'src/entities/genero.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Peliculas, Genero])],
  // Entities que va a utilizar el REPOSITORY
  controllers: [PeliculasController],
  // Acceso mediante API REST hasta /peliculas
  providers: [PeliculasService],
  // permite utilizarlo dentro de la isla, o del módulo
  exports: [PeliculasService],
  // EXPORT, permite a otros módulo utilizar este Servicde
})
export class PeliculasModule {}
