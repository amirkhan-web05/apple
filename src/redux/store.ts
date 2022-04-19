import { createStore, applyMiddleware, compose } from "redux";
import {rootReducers} from "./reducers";
import thunk from 'redux-thunk'

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducers, composeEnhancers(applyMiddleware(thunk)))