import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Injectable()
export class MovieService {
  #idCount = 3;
  #movies = [
    {
      id: 1,
      title: 'Harry Potter',
      genre: 'Fantasy',
    },
    {
      id: 2,
      title: 'Avengers',
      genre: 'action',
    },
  ];

  getManyMovies(title?: string) {
    if (title) {
      return this.#movies.filter((movie) => movie.title.startsWith(title));
    }

    return this.#movies;
  }

  getMovieById(id: number) {
    const movie = this.#movies.find((movie) => movie.id === id);

    if (!movie) {
      throw new NotFoundException('존재하지 않는 영화입니다.');
    }

    return movie;
  }

  createMovie(createMovieDto: CreateMovieDto) {
    const movie = {
      id: this.#idCount++,
      ...createMovieDto,
    };

    this.#movies.push(movie);

    return movie;
  }

  updateMovie(id: number, updateMovieDto: UpdateMovieDto) {
    const movie = this.#movies.find((movie) => movie.id === id);

    if (!movie) {
      throw new NotFoundException('존재하지 않는 영화입니다.');
    }

    Object.assign(movie, updateMovieDto);

    return movie;
  }

  deleteMovie(id: number) {
    const movieIndex = this.#movies.findIndex((m) => m.id === id);
    if (movieIndex === -1) {
      throw new NotFoundException('존재하지 않는 영화입니다.');
    }

    this.#movies.splice(movieIndex, 1);

    return id;
  }
}
