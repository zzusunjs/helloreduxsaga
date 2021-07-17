import allReudcer from './reducers';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { watcherSaga } from './sagas/rootSaga';

const sagaMiddleWare = createSagaMiddleware();
const middleWares = [sagaMiddleWare];

const store = createStore(allReudcer, {}, applyMiddleware(...middleWares));

sagaMiddleWare.run(watcherSaga);

export default store;