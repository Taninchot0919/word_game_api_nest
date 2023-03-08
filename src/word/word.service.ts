import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateWordDTO, WordDTO } from './dto';

@Injectable()
export class WordService {
  constructor(private prismaService: PrismaService) {}

  async createWord(data: CreateWordDTO): Promise<WordDTO> {
    let word: WordDTO = await this.prismaService.word.create({
      data: {
        name: data.name,
      },
    });
    if (data.genreId) {
      await this.prismaService.word_genre.create({
        data: {
          genreId: data.genreId,
          wordId: word.id,
        },
      });
    }
    return word;
  }

  async getWords(genre: string): Promise<object> {
    if (!genre) {
      let words: [object] = await this.prismaService.$queryRaw`
      SELECT * FROM "word" ORDER BY RANDOM() LIMIT 1;
      `;
      if (words.length <= 0) {
        return;
      }
      return words[0];
    }
    let words = await this.prismaService.word_genre.findMany({
      where: {
        genre: {
          id: genre,
        },
      },
      take: 1,
      select: {
        word: true,
      },
    });
    if (words.length <= 0) {
      return;
    }
    return words[0].word;
  }
}
