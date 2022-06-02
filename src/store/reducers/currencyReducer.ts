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
    default:
      return state;
  }
};

export default currencyReducer;
