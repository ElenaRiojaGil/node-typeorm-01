import { Controller, Get, Param } from '@nestjs/common';
import { FavoritosService } from './favoritos.service';
import { Peliculas } from 'src/entities/pelicula.entity';

@Controller('favoritos')
export class FavoritosController {
  constructor(private readonly favoritosService: FavoritosService) {}

  @Get(':userId')
  async getFavoritos(@Param('userId') userId: number): Promise<Peliculas[]> {
    return this.favoritosService.getFavoritos(userId);
  }
}
