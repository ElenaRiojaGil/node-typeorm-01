import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Genero } from './genero.entity';
import { Favoritos } from './favoritos.entity';

@Entity('peliculas') // Nombre de la tabla en la base de datos
export class Peliculas {
  @PrimaryGeneratedColumn() // Clave primaria autogenerada (integer)
  id: number;

  @Column({ type: 'varchar', length: 100, nullable: false }) // Columna de texto con longitud máxima de 100 caracteres
  titulo: string;

  @Column({ type: 'text', nullable: true }) // Columna de texto opcional (para la descripción)
  descripcion: string;

  @Column({ type: 'int', nullable: true }) // Columna opcional para el año
  anio: number;

  @Column({ type: 'varchar', length: 255, nullable: true }) // Columna opcional para la URL de la imagen
  imagen_url: string;

  @ManyToOne(() => Genero, (genero) => genero.peliculas, {
    nullable: false,
    onDelete: 'RESTRICT',
  }) // Relación muchos-a-uno
  @JoinColumn({ name: 'genero_id' }) // Define el nombre de la columna FK
  genero: Genero;

  @OneToMany(() => Favoritos, (favoritos) => favoritos.peliculas)
  favoritos: Favoritos[];
}

/*
┌───────────────┐                ┌───────────────────────┐
│   Genero1     │  1          N  │     Peliculas1        │
├───────────────┤◄──────────────►│ id (PK)               │
│ id (PK)       │                │ titulo                │
│ titulo        │                │ descripcion           │
└───────────────┘                │ anio                  │
                                 │ genero_id (FK)        │
                                 │ imagen_url            │
                                 └───────────────────────┘

*/
