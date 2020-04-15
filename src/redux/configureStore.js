import {createStore,applyMiddleware,compose} from 'redux';
import logger from 'redux-logger';
import reduxThunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import reducers from '../redux/reducers';

export default function configureStore(preloadedState) {
  const middlewares = [promise,reduxThunk,logger];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  //hay una parte de enhancer que se importa que aun no se toma en cuenta
  const enhancers = [middlewareEnhancer];
  const composedEnhancers = compose(...enhancers); 

  const store = createStore(reducers, preloadedState, composedEnhancers);
  //const store = createStore(reducers,{},applyMiddleware(promise,reduxThunk,logger));
  return store;
}

/*
import { applyMiddleware, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import reducers from '../redux/reducers';

export default function configureStore(preloadedState) {
  const middlewares = [logger, thunkMiddleware]
  const middlewareEnhancer = applyMiddleware(...middlewares)

  const enhancers = [middlewareEnhancer]
  const composedEnhancers = compose(...enhancers) 

  const store = createStore(reducers, preloadedState, composedEnhancers)

  return store
}
*/