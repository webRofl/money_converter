import {
  CurrencyAction,
  currencyActionTypes,
  ICurrencyState,
} from '../types/currency';

const initialState: ICurrencyState = {
  rates: {},
  baseCurrency: 'usd',
  originalCurrency: null, // first input currency
  convertCurrency: null,
  quantity: null,
  result: null,
  allCurrencies: null,
  searchCurrencyValue: null,
};

const currencyReducer = (state = initialState, action: CurrencyAction) => {
  switch (action.type) {
    case currencyActionTypes.SET_CURRENCY_RATES:
      return {
        ...state,
        rates: action.rates,
      };
    case currencyActionTypes.SET_CURRENCY_INFO:
      return {
        ...state,
        originalCurrency: action.originalCurrency,
        convertCurrency: action.convertCurrency,
        quantity: action.quantity,
      };
    case currencyActionTypes.SET_RESULT_SUCCESS:
      return {
        ...state,
        result: action.result,
      };
    case currencyActionTypes.SET_BASE_CURRENCY:
      return {
        ...state,
        baseCurrency: action.baseCurrency,
      };
    case currencyActionTypes.SET_ALL_CURRENCIES_SUCCESS:
      return {
        ...state,
        allCurrencies: action.currencies,
      };
    case currencyActionTypes.SET_SEARCH_CURRENCY_VALUE:
      return {
        ...state,
        searchCurrencyValue: action.value,
      };
    default:
      return state;
  }
};

export default currencyReducer;
