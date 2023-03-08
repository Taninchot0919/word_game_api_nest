import { Controller } from '@nestjs/common';
import { Get, Post, Body } from '@nestjs/common';
import { CreateGenreDTO } from './dto';
import { GenreService } from './genre.service';

@Controller('genre')
export class GenreController {
  constructor(private readonly genreService: GenreService) {}

  @Get('/')
  findAllGenres(): Promise<object> {
    return this.genreService.getGenres();
  }

  @Post('/create')
  createGenre(@Body() createGenreDTO: CreateGenreDTO): Promise<object> {
    return this.genreService.createGenre(createGenreDTO);
  }
}
