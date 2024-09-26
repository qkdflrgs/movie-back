import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class Movie {
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  genre: string;
}
