import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGenreDTO, GenreDTO } from './dto';

@Injectable()
export class GenreService {
  constructor(private prismaService: PrismaService) {}

  async createGenre(data: CreateGenreDTO): Promise<GenreDTO> {
    let genre: GenreDTO = await this.prismaService.genre.create({
      data,
    });
    return genre;
  }

  async getGenres(): Promise<GenreDTO[]> {
    let genres: GenreDTO[] = await this.prismaService.genre.findMany({
      select: {
        id: true,
        name: true,
      },
    });
    return genres;
  }
}
