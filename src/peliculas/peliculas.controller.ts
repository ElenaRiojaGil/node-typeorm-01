import { Body, Controller, Post } from '@nestjs/common';
import { PeliculasService } from './peliculas.service';
import { Pelicula } from 'src/entities/pelicula.entity';

@Controller('peliculas')
export class PeliculasController {
    constructor(private readonly peliculaService: PeliculasService){}

    @Post()
    async createPelicula(@Body() peli: Partial<Pelicula>): Promise<Pelicula>{
        return this.peliculaService.create(peli);
    }
}
