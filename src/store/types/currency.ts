export enum currencyActionTypes {
  GET_CURRENCY = 'currencyReducer/GET_CURRENCY',
  SET_CURRENCY_RATES = 'currencyReducer/SET_CURRENCY_RATES',
  SET_CURRENCY_INFO = 'currencyReducer/SET_CURRENCY_INFO',
  SET_RESULT_SUCCESS = 'currencyReducer/SET_RESULT_SUCCESS',
  SET_RESULT = 'currencyReducer/SET_RESULT',
  SET_BASE_CURRENCY = 'currencyReducer/SET_BASE_CURRENCY',
  SET_ALL_CURRENCIES = 'currencyReducer/SET_ALL_CURRENCIES',
  SET_ALL_CURRENCIES_SUCCESS = 'currencyReducer/SET_ALL_CURRENCIES_SUCCESS',
  SET_SEARCH_CURRENCY_VALUE = 'currencyReducer/SET_SEARCH_CURRENCY_VALUE',
  FILTER_CURRENCIES = 'currencyReducer/FILTER_CURRENCIES',
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
  allCurrencies: Rates[] | null;
  searchCurrencyValue: string | null;
}

export type CurrencyAction =
  | ISetCurrencyRates
  | ISetCurrencyInfo
  | ISetResultSuccess
  | ISetBaseCurrency
  | ISetAllCurrenciesSuccess
  | ISetSearchCurrencyValue;

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

export interface ISetBaseCurrency {
  type: typeof currencyActionTypes.SET_BASE_CURRENCY;
  baseCurrency: string;
}

export interface ISetAllCurrencies {
  type: typeof currencyActionTypes.SET_ALL_CURRENCIES;
  rates: Rates;
  baseCurrency: string;
}

export interface ISetAllCurrenciesSuccess {
  type: typeof currencyActionTypes.SET_ALL_CURRENCIES_SUCCESS;
  currencies: Rates[];
}

export interface ISetSearchCurrencyValue {
  type: typeof currencyActionTypes.SET_SEARCH_CURRENCY_VALUE;
  value: string;
}

export interface IFilterCurrencies {
  type: typeof currencyActionTypes.FILTER_CURRENCIES;
  rates: Rates[];
  searchValue: string;
}
