
import { combineReducers } from 'redux';


const initialState = {
    list: [{item: 'test', done: false}],
    newToDo: ''
  };

export default function reducers(state = {}, action){
    switch (action.type){
        case "asdf":
        return state;
    default:
      return state;
    }
  }