export const currencyParser = (str: string): [number, string, string] => {
  const quantity = str.match(/\d/g)?.join('');
  const currency = str.match(/[a-z]{3}/g);
  //@ts-ignore
  return [parseFloat(quantity), currency[0], currency[1]];
};
