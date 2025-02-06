import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pelicula } from 'src/entities/pelicula.entity';
import { Repository } from 'typeorm';

@Injectable()

export class PeliculasService {

    constructor(
        @InjectRepository(Pelicula)
        private peliculasRepository: Repository<Pelicula>,
    ) {} 
    async findAll():Promise<Pelicula[]>{
        return this.peliculasRepository.find();
    }
    async findOne(id: number):Promise<Pelicula | null >{
        return this.peliculasRepository.findOne({ where: { id}});
    }
    async create(data: Partial<Pelicula>): Promise<Pelicula>{
        const newPeli = this.peliculasRepository.create(data);
        return this.peliculasRepository.save(newPeli);
}
}
