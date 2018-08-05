import axios from 'axios';

const service = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? '/api' : 'http://localhost:3000/article',
});

const errHandler = err => {
  console.error(err);
  throw err;
};

export default {
    service: service,
    
    getArticles() {
      return service
        .get('/')
        .then(res => res.data)
    }
};

