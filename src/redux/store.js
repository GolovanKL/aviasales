import {createStore, applyMiddleware, compose} from "redux";
import reduxThunk from 'redux-thunk';

import logger from 'redux-logger';

import reducer from "./reducer";

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(logger, reduxThunk)));

export default store;