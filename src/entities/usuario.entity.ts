import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Favoritos } from './favoritos.entity';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Favoritos, (favoritos) => favoritos.usuario)
  favoritos: Favoritos[];
}
