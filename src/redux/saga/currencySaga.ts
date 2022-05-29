import { getCurrency } from './../../api/api';
import { setResult, setError } from './../currencyReducer';
import { GlobalState } from './../store';
import { takeEvery, call, put, select } from 'redux-saga/effects';
import { GET_CURRENCY_ASYNC } from '../currencyReducer';

function* currencyWorker(action: any) {
  //@ts-ignore
  const data = yield call(() => getCurrency());
  console.log(data);

  if (data.status === 200) {
    //@ts-ignore
    const value = yield select((state: GlobalState) => state.currency.value);
    //@ts-ignore
    const result = value * data.data[currencyStr];
    yield put(setResult(result));
  } else {
    put(setError(data.message));
  }
}

export function* currencyWatcher() {
  yield takeEvery(GET_CURRENCY_ASYNC, currencyWorker);
}
