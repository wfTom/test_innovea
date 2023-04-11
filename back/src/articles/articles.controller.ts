import { Controller, Get, Param } from '@nestjs/common';
import { ArticlesService } from './articles.service';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Get()
  findAll() {
    return this.articlesService.find();
  }

  @Get(':text')
  findOne(@Param('text') text: string) {
    return this.articlesService.find(text);
  }
}
