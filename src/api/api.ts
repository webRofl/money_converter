import axios from 'axios';

export const getCurrency = axios.get('https://cdn.cur.su/api/latest.json');
