import { Metadata } from 'src/common/entities/metadata.entity';
import { Movie } from 'src/movie/entities/movie.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Genre extends Metadata {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    unique: true,
  })
  name: string;

  @ManyToMany(() => Movie, (movie) => movie.id)
  movies: Movie[];
}
