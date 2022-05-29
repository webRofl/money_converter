import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://currate.ru/api',
  withCredentials: true,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});

export const convertCurrency = {
  getCurrency: (currency: string) =>
    instance.get(
      `/?get=rates&pairs=${currency}&key=98f69f05731a0ec648f0c0be73f86731`
    ),
};
