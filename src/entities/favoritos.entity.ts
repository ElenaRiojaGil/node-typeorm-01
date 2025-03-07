import { Entity, ManyToOne, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { Peliculas } from './pelicula.entity';
import { Usuario } from './usuario.entity';

@Entity('favoritos')
@Unique(['usuario', 'peliculas']) // Restricción UNIQUE en (user_id, movie_id)
export class Favoritos {
  @PrimaryGeneratedColumn()
  id: number; // ID autonumérico para mejorar rendimiento

  @ManyToOne(() => Usuario, (usuario) => usuario.favoritos, {
    onDelete: 'RESTRICT',
    eager: true, // Carga ansiosa para evitar N+1
  })
  usuario: Usuario;

  @ManyToOne(() => Peliculas, (peliculas) => peliculas.favoritos, {
    onDelete: 'RESTRICT', // Restricción de clave foránea
    eager: true, // Carga ansiosa para evitar N+1
  })
  peliculas: Peliculas;
}
