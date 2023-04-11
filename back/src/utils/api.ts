import axios from 'axios';
import _ from 'lodash';

const newsapi = axios.create({
  baseURL: 'https://newsapi.org/v2/',
});

export default newsapi;
