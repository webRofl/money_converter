export enum currencyActionTypes {
  GET_CURRENCY = 'currencyReducer/GET_CURRENCY',
  SET_CURRENCY_RATES = 'currencyReducer/SET_CURRENCY_RATES',
  SET_CURRENCY_INFO = 'currencyReducer/SET_CURRENCY_INFO',
  SET_RESULT_SUCCESS = 'currencyReducer/SET_RESULT_SUCCESS',
  SET_RESULT = 'currencyReducer/SET_RESULT',
}

export type Rates = {
  readonly [key: string]: number;
};

export interface ICurrencyState {
  rates: Rates;
  baseCurrency: string;
  originalCurrency: string | null;
  convertCurrency: string | null;
  quantity: number | null;
  result: number | null;
}

export type CurrencyAction =
  | ISetCurrencyRates
  | ISetCurrencyInfo
  | ISetResultSuccess;

export interface IGetCurrencyAsync {
  type: typeof currencyActionTypes.GET_CURRENCY;
}

export interface ISetCurrencyRates {
  type: typeof currencyActionTypes.SET_CURRENCY_RATES;
  rates: Rates;
}

export interface ISetCurrencyInfo {
  type: typeof currencyActionTypes.SET_CURRENCY_INFO;
  originalCurrency: string;
  convertCurrency: string;
  quantity: number;
}

export interface ISetResultSuccess {
  type: typeof currencyActionTypes.SET_RESULT_SUCCESS;
  result: number;
}

export interface ISetResult {
  type: typeof currencyActionTypes.SET_RESULT;
  originalCurrency: string;
  convertCurrency: string;
  quantity: number;
}
