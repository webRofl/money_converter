import { RootState } from './../reducers/index';
import { currencyActionTypes, ISetResult } from './../types/currency';
import { getCurrency } from '../../api/api';
import { takeEvery, call, put, select } from 'redux-saga/effects';
import { setResultSuccess, setCurrencyRates } from '../actions/currency';

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
  if (
    originalCurrency.toLocaleLowerCase() === convertCurrency.toLocaleLowerCase()
  ) {
    yield put(setResultSuccess(quantity));
    return;
  } else if (originalCurrency.toLocaleLowerCase() === 'usd') {
    const result = rates[convertCurrency.toUpperCase()] * quantity;

    yield put(setResultSuccess(parseFloat(result.toFixed(2))));
    return;
  } else if (convertCurrency.toLocaleLowerCase() === 'usd') {
    const result = (1 / rates[originalCurrency.toUpperCase()]) * quantity;
    yield put(setResultSuccess(parseFloat(result.toFixed(2))));
    return;
  }

  const result =
    (rates[convertCurrency.toUpperCase()] /
      rates[originalCurrency.toUpperCase()]) *
    quantity;
  yield put(setResultSuccess(parseFloat(result.toFixed(2))));
}

export function* currencyWatcher() {
  yield takeEvery(currencyActionTypes.GET_CURRENCY, currencyWorker);
  yield takeEvery<ISetResult>(currencyActionTypes.SET_RESULT, convertWorker);
}
