import { setResult, setError } from './../currencyReducer';
import { GlobalState } from './../store';
import { takeEvery, call, put, select } from 'redux-saga/effects';
import { convertCurrency } from '../../api/api';
import { GET_CURRENCY_ASYNC } from '../currencyReducer';

function* currencyWorker(action: any) {
  const currencyStr = convertCurrency.getCurrency(action.pair);
  //@ts-ignore
  const data = yield call(() => currencyStr);
  if (data.status === 200) {
    //@ts-ignore
    const value = yield select((state: GlobalState) => state.currency.value);
    const result = value * data.data[currencyStr];
    yield put(setResult(result));
  } else {
    put(setError(data.message));
  }
}

export function* currencyWatcher() {
  yield takeEvery(GET_CURRENCY_ASYNC, currencyWorker);
}
