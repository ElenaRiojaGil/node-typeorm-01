import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Pelicula } from "./pelicula.entity";

@Entity('genero') // Nombre de la tabla en la base de datos
export class Genero {
  @PrimaryGeneratedColumn() // Clave primaria autogenerada (integer)
  id: number;

  @Column({ type: 'varchar', length: 100, nullable: false }) // Columna de texto con longitud máxima de 100 caracteres
  titulo: string;
  //LA RELACION EN OBJETOS LA HACEMOS DESDE EL PADRE HACIA EL HIJO
  @OneToMany(() => Pelicula, (pelicula) => pelicula.genero) // Relación uno-a-muchos
  peliculas: Pelicula[]; // Arreglo de películas relacionadas
}



// 
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