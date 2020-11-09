import axios from 'axios';

// DEVELOPMENT MODE
// const url = 'http://localhost:3333';
// PRODUCTION MODE
const url = 'http://vps20343.publiccloud.com.br';

export const api = axios.create({
  baseURL: 'http://vps20343.publiccloud.com.br'
});

export const sock = 'http://vps20343.publiccloud.com.br';

export const rab = axios.create({
  baseURL: 'https://ais.cavok.in/api/rab'
})