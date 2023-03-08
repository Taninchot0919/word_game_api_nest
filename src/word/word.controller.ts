import { Controller, Param } from '@nestjs/common';
import { Get, Post, Body } from '@nestjs/common';
import { Query } from '@nestjs/common/decorators';
import { CreateWordDTO, WordDTO } from './dto';
import { WordService } from './word.service';

@Controller('words')
export class WordController {
  constructor(private readonly wordService: WordService) {}

  @Get('/')
  findWords(@Query('genre') genre: string): Promise<object> {
    return this.wordService.getWords(genre);
  }

  @Post('/create')
  createWord(@Body() data: CreateWordDTO): Promise<WordDTO> {
    return this.wordService.createWord(data);
  }
}
