import { setAllCurrenciesSuccess } from './../actions/currency';
import { RootState } from './../reducers/index';
import {
  currencyActionTypes,
  IFilterCurrencies,
  ISetAllCurrencies,
  ISetResult,
  Rates,
} from './../types/currency';
import { getCurrency } from '../../api/api';
import { takeEvery, call, put, select } from 'redux-saga/effects';
import { setResultSuccess, setCurrencyRates } from '../actions/currency';
import { convertAll, filterCurrencies } from '../../utils/currency';

function* currencyWorker() {
  //@ts-ignore
  const data = yield call(() => getCurrency());
  //@ts-ignore
  yield put(setCurrencyRates(data.data.rates));
}

interface ConvertWorkerAction {
  originalCurrency: string;
  convertCurrency: string;
  quantity: number;
}

function* convertWorker(action: ConvertWorkerAction) {
  const { originalCurrency, convertCurrency, quantity } = action;

  //@ts-ignore
  const rates = yield select((state: RootState) => state.currency.rates);
  const result =
    (rates[convertCurrency.toUpperCase()] /
      rates[originalCurrency.toUpperCase()]) *
    quantity;

  if (isNaN(result)) {
    yield put(setResultSuccess(-1));
    return;
  }

  if (parseFloat(result.toFixed(2)) === 0) {
    yield put(setResultSuccess(parseFloat(result.toFixed(8))));
    return;
  }
  yield put(setResultSuccess(parseFloat(result.toFixed(2))));
}

interface setCurrenciesWorkerAction {
  baseCurrency: string;
  rates: Rates;
}

function* setCurrenciesWorker(action: setCurrenciesWorkerAction) {
  const result = convertAll(action.baseCurrency, action.rates);

  yield put(setAllCurrenciesSuccess(result));
}

interface filterCurrenciesWorkerAction {
  rates: Rates[];
  searchValue: string;
}

function* filterCurrenciesWorker(action: filterCurrenciesWorkerAction) {
  const data = filterCurrencies(action.rates, action.searchValue);
  yield put(setAllCurrenciesSuccess(data));
}

export function* currencyWatcher() {
  yield takeEvery(currencyActionTypes.GET_CURRENCY, currencyWorker);
  yield takeEvery<ISetResult>(currencyActionTypes.SET_RESULT, convertWorker);
  yield takeEvery<ISetAllCurrencies>(
    currencyActionTypes.SET_ALL_CURRENCIES,
    setCurrenciesWorker
  );
  yield takeEvery<IFilterCurrencies>(
    currencyActionTypes.FILTER_CURRENCIES,
    filterCurrenciesWorker
  );
}
