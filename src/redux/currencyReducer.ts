export const GET_CURRENCY_ASYNC = 'currencyReducer/GET_CURRENCY_ASYNC';
export const SET_VALUE = 'currencyReducer/SET_VALUE';
export const SET_FIRST_CURRENCY = 'currencyReducer/SET_FIRST_CURRENCY';
export const SET_SECOND_CURRENCY = 'currencyReducer/SET_SECOND_CURRENCY';
export const SET_RESULT = 'currencyReducer/SET_RESULT';
export const SET_ERROR = 'currencyReducer/SET_ERROR';

const initialState = {
  value: null,
  firstCurrency: null,
  secondCurrency: null,
  result: null,
  error: null,
};

const currencyReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_VALUE:
      return {
        ...state,
        value: action.value,
      };
    case SET_FIRST_CURRENCY:
      return {
        ...state,
        firstCurrency: action.currency,
      };
    case SET_SECOND_CURRENCY:
      return {
        ...state,
        secondCurrency: action.currency,
      };
    case SET_RESULT:
      return {
        ...state,
        result: action.result,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

export const getCurrencyAsync = (pair: string) => ({
  type: GET_CURRENCY_ASYNC,
  pair,
});

export const setValue = (value: number) => ({
  type: SET_VALUE,
  value,
});

export const setFirstCurrency = (currency: string) => ({
  type: SET_FIRST_CURRENCY,
  currency,
});

export const setSecondCurrency = (currency: string) => ({
  type: SET_SECOND_CURRENCY,
  currency,
});

export const setResult = (result: number) => ({
  type: SET_RESULT,
  result,
});

export const setError = (error: string) => ({
  type: SET_ERROR,
  error,
});

export default currencyReducer;
