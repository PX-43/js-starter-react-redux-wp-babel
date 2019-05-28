import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { reducer } from './../reducers';
/*import saga from './../sagas';*/
import { initState } from './initState';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({name: '___TEMPLATE___'}) : compose;

// noinspection JSCheckFunctionSignatures
const store  = createStore(
  reducer,
  initState,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(/*saga,*/ store.dispatch);

export default store;
