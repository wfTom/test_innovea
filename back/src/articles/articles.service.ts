import { Injectable } from '@nestjs/common';
import newsapi from 'src/utils/api';

@Injectable()
export class ArticlesService {
  async find(text = 'keyword') {
    try {
      const url = `everything?q=${text}&apiKey=${process.env.API_KEY}`;
      const { data } = await newsapi.get(url).then();
      return data;
    } catch (err) {
      return 'Houve um erro na api';
    }
  }
}
