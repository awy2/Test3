import get from 'lodash/get';
import * as types from './types';


const initialState = {
    company: '',
    contactLastName: null,
    contactFirstName: null,
    address: null,
    city: null,
    province: 'BC',
    zipcode: null
};

export default function reducers(state = initialState, action){
    switch (action.type){
      case types.COMPANY_CHANGED:
        return Object.assign({}, state, { company: get(action, 'company', '' ) });
      case types.LAST_NAME_CHANGED:
        return Object.assign({}, state, { lastName: get(action, 'lastName', '' ) });
      case types.FIRST_NAME_CHANGED:
        return Object.assign({}, state, { firstName: get(action, 'firstName', '' )});
      case types.ADDRESS_CHANGED:
        return Object.assign({}, state, { address: get(action, 'address', '' ) });
      case types.CITY_CHANGED:
        return Object.assign({}, state, { city: get(action, 'city', '' ) });
      case types.PROVINCE_CHANGED:
        return Object.assign({}, state, { province: get(action, 'province', '' ) });
      case types.ZIP_CHANGED:
        return Object.assign({}, state, { zipCode: get(action, 'zipCode', '' ) });
    default:
      return state;
    }
  }