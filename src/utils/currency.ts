import { Rates } from './../store/types/currency';

export const currencyParser = (str: string): [number, string, string] => {
  const quantity = str.match(/\d/g)?.join('');
  const currency = str.match(/[a-z]{3}/g);
  if (quantity && currency)
    return [parseFloat(quantity), currency[0], currency[1]];
  else return [-1, 'usd', 'usd'];
};

export const convertAll = (base: string, rates: Rates): Rates[] => {
  const resultRates: Rates[] = [];
  for (const key in rates) {
    if (base === 'usd') {
      resultRates.push({
        [key]: rates[key],
      });
    } else {
      resultRates.push({
        [key]: parseFloat(
          (rates[key.toUpperCase()] / rates[base.toUpperCase()]).toFixed(6)
        ),
      });
    }
  }
  return resultRates;
};

export const filterCurrencies = (
  rates: Rates[],
  searchValue: string
): Rates[] => {
  return rates.filter((currency) => {
    const key = Object.keys(currency)[0];
    if (key.startsWith(searchValue.toUpperCase())) return currency;
  });
};
