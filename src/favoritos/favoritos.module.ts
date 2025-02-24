import { Module } from '@nestjs/common';
import { FavoritosService } from './favoritos.service';
import { FavoritosController } from './favoritos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Peliculas } from 'src/entities/pelicula.entity';
import { Usuario } from 'src/entities/usuario.entity';
import { Favoritos } from 'src/entities/favoritos.entity';

// TYPEORM
@Module({
  imports: [TypeOrmModule.forFeature([Peliculas, Usuario, Favoritos])],
  providers: [FavoritosService],
  controllers: [FavoritosController],
})
export class FavoritosModule {}
