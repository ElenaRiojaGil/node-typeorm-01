import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Favoritos } from 'src/entities/favoritos.entity';
import { Peliculas } from 'src/entities/pelicula.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FavoritosService {
  constructor(
    @InjectRepository(Favoritos)
    private favoritoRepository: Repository<Favoritos>,
  ) {}

  async getFavoritos(userId: number): Promise<Peliculas[]> {
    const favoritos = await this.favoritoRepository.find({
      where: { usuario: { id: userId } },
    });
    return favoritos.map((fav) => fav.peliculas);
  }
}
