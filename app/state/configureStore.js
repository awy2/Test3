import { createStore, applyMiddleware, combineReducers } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import * as reducers from './ducks';

export default function configureStore() {
    const middleware = [createLogger, thunk];
    const rootReducer = combineReducers(reducers);
    const store = createStore(rootReducer, applyMiddleware(...middleware));

    return store;
}
