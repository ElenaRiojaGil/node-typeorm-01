import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Peliculas } from 'src/entities/pelicula.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PeliculasService {
  constructor(
    @InjectRepository(Peliculas)
    private peliculasRepository: Repository<Peliculas>,
  ) {}
  async findAll(): Promise<Peliculas[]> {
    return this.peliculasRepository.find();
  }
  async findOne(id: number): Promise<Peliculas | null> {
    return this.peliculasRepository.findOne({ where: { id } });
  }
  async create(data: Partial<Peliculas>): Promise<Peliculas> {
    const newPeli = this.peliculasRepository.create(data);
    return this.peliculasRepository.save(newPeli);
  }
}
