import { Body, Controller, Get, Post } from '@nestjs/common';
import { PeliculasService } from './peliculas.service';
import { Peliculas } from 'src/entities/pelicula.entity';

@Controller('peliculas')
export class PeliculasController {
  constructor(private readonly peliculaService: PeliculasService) {}
  @Get()
  async obtenerPeliculas() {
    return this.peliculaService.findAll();
  }

  @Post()
  async createPelicula(@Body() peli: Partial<Peliculas>): Promise<Peliculas> {
    return this.peliculaService.create(peli);
  }
}
