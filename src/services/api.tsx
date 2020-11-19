import axios from 'axios';

// DEVELOPMENT MODE
// const url = 'http://localhost:3333';
// PRODUCTION MODE
const url = 'https://starthos.com.br';

export const api = axios.create({
  baseURL: 'https://starthos.com.br'
});

export const sock = 'https://starthos.com.br';

export const rab = axios.create({
  baseURL: 'https://ais.cavok.in/api/rab'
})