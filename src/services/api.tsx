import axios from 'axios';

// DEVELOPMENT MODE
const url = 'http://localhost:3333';

export const api = axios.create({
  baseURL: url
});

export const sock = url;

export const rab = axios.create({
  baseURL: 'https://ais.cavok.in/api/rab'
})