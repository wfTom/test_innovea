import { Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import newsapi from 'src/utils/api';

@Injectable()
export class ArticlesService {
  async findAll() {
    try {
      console.log('env:', process.env.API_KEY);
      const url = `everything?q=keyword&apiKey=${process.env.API_KEY}`;
      const { data } = await newsapi.get(url).then();
      return data;
    } catch (err) {
      return 'Houve um erro na api';
    }
  }

  async find(text = 'keyword') {
    try {
      console.log('pesquisar:', text);
      const url = `everything?q=${text}&apiKey=${process.env.API_KEY}`;
      const { data } = await newsapi.get(url).then();
      console.log('data:', data);
      return data;
    } catch (err) {
      return 'Houve um erro na api';
    }
  }
}
