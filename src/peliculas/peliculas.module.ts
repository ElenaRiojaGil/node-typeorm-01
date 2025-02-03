import { Module } from '@nestjs/common';
import { PeliculasService } from './peliculas.service';
import { PeliculasController } from './peliculas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Genero } from 'src/entities/genero.entity';
import { Pelicula } from 'src/entities/pelicula.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pelicula, Genero])],
  // Entities que va a utiliza el REPOSITORY
  controllers: [PeliculasController],
  //Acceso mediante API REST hata peliculas
  providers: [PeliculasService],
  // permite utilizarlo dentro de la isla, o del modulo
  exports: [PeliculasService], 
  //EXPORT, permite a otros modulo utiliza este Service
})
export class PeliculasModule {}
