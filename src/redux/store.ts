import { applyMiddleware, combineReducers, createStore } from 'redux';

import createSagaMiddleware from 'redux-saga';
import currencyReducer from './currencyReducer';
import { rootWatcher } from './saga/rootSaga';

const sagaMiddleWare = createSagaMiddleware();

const rootReducer = {
  currency: currencyReducer,
};

export type GlobalState = typeof rootReducer;

const store = createStore(
  combineReducers(rootReducer),
  applyMiddleware(sagaMiddleWare)
);

sagaMiddleWare.run(rootWatcher);

export default store;
