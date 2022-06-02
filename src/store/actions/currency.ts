import {
  currencyActionTypes,
  IGetCurrencyAsync,
  ISetCurrencyInfo,
  ISetCurrencyRates,
  ISetResult,
  ISetResultSuccess,
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
