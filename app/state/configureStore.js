import { createStore, applyMiddleware, combineReducers } from 'redux'
import createLogger from 'redux-logger';
import * as reducers from "./ducks";


export default function configureStore( ) {

    const middleware = [ createLogger ];

    const rootReducer = combineReducers( reducers );


    let store = createStore( rootReducer,  applyMiddleware(...middleware) );


  return store;
}