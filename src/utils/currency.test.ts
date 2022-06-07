import { currencyParser } from './currency';

describe('currency util', () => {
  test('currencyParser', () => {
    const data = currencyParser('15 usd in rub');
    expect(data).toEqual([15, 'usd', 'rub']);
  });
});
