import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from './index';
import mySaga from '../Sagas';

import logger from 'redux-logger';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware, logger];

// mount it on the Store
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(...middlewares)),
);

// then run the saga
sagaMiddleware.run(mySaga);
export default store;
