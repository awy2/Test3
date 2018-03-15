import { createStore, applyMiddleware, combineReducers } from 'redux'
import createLogger from 'redux-logger';
import reducers from './modules'

export default function configureStore( ) {

    const middleware = [ createLogger ];

    const reducer = combineReducers({
        reducers
      });

    let store = createStore( reducer,  applyMiddleware(...middleware) );


  return store;
}