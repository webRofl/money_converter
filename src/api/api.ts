import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://currate.ru/api',
  headers: {
    api: 'QQCXRstnLYapNKIBWfMbkbOHrm3YD081',
  },
});

export const convertCurrency = {
  getCurrency: (currency: string) =>
    `/?get=rates&pairs=${currency}&key=98f69f05731a0ec648f0c0be73f86731`,
};
