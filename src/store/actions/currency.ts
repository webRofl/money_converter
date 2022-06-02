import {
  currencyActionTypes,
  IFilterCurrencies,
  IGetCurrencyAsync,
  ISetAllCurrencies,
  ISetAllCurrenciesSuccess,
  ISetBaseCurrency,
  ISetCurrencyInfo,
  ISetCurrencyRates,
  ISetResult,
  ISetResultSuccess,
  ISetSearchCurrencyValue,
  Rates,
} from './../types/currency';

export const getCurrencyAsync = (): IGetCurrencyAsync => ({
  type: currencyActionTypes.GET_CURRENCY,
});

export const setCurrencyRates = (rates: Rates): ISetCurrencyRates => ({
  type: currencyActionTypes.SET_CURRENCY_RATES,
  rates,
});

export const setCurrencyInfo = (
  originalCurrency: string,
  convertCurrency: string,
  quantity: number
): ISetCurrencyInfo => ({
  type: currencyActionTypes.SET_CURRENCY_INFO,
  originalCurrency,
  convertCurrency,
  quantity,
});

export const setResultSuccess = (result: number): ISetResultSuccess => ({
  type: currencyActionTypes.SET_RESULT_SUCCESS,
  result,
});

export const setResult = (
  originalCurrency: string,
  convertCurrency: string,
  quantity: number
): ISetResult => ({
  type: currencyActionTypes.SET_RESULT,
  originalCurrency,
  convertCurrency,
  quantity,
});

export const setBaseCurrency = (baseCurrency: string): ISetBaseCurrency => ({
  type: currencyActionTypes.SET_BASE_CURRENCY,
  baseCurrency,
});

export const setAllCurrencies = (
  baseCurrency: string,
  rates: Rates
): ISetAllCurrencies => ({
  type: currencyActionTypes.SET_ALL_CURRENCIES,
  baseCurrency,
  rates,
});

export const setAllCurrenciesSuccess = (
  currencies: Rates[]
): ISetAllCurrenciesSuccess => ({
  type: currencyActionTypes.SET_ALL_CURRENCIES_SUCCESS,
  currencies,
});

export const setSearchCurrencyValue = (
  value: string
): ISetSearchCurrencyValue => ({
  type: currencyActionTypes.SET_SEARCH_CURRENCY_VALUE,
  value,
});

export const filterCurrencies = (
  rates: Rates[],
  searchValue: string
): IFilterCurrencies => ({
  type: currencyActionTypes.FILTER_CURRENCIES,
  rates,
  searchValue,
});
