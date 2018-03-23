import get from 'lodash/get'
import has from 'lodash/has'

const COMPANY_CHANGED = 'COMPANY_CHANGED';
const LAST_NAME_CHANGED = 'LAST_NAME_CHANGED';
const FIRST_NAME_CHANGED = 'FIRST_NAME_CHANGED';
const ADDRESS_CHANGED = 'ADDRESS_CHANGED';
const CITY_CHANGED = 'CITY_CHANGED';
const PROVINCE_CHANGED = 'PROVINCE_CHANGED';
const ZIP_CHANGED = 'ZIP_CHANGED';


export function companyChange(company){
    return {
        type: COMPANY_CHANGED,
        company 
    }
}   

export function lastNameChange(lastName){
    return {  
    type: LAST_NAME_CHANGED,
    lastName 
  }
}

export function firstNameChange(firstName){
  return {
    type: FIRST_NAME_CHANGED,
    firstName 
  }
}

export function addressChange(address){
  return {
    type: ADDRESS_CHANGED,
    address 
  }
}
export function cityChange(city){
  return {
    type: CITY_CHANGED,
    city 
  }
}

export function provinceChange(province){
  return {
    type: PROVINCE_CHANGED,
    province 
  }
}

export function zipCodeChange(zipCode){
  return {
    type: ZIP_CHANGED,
    zipCode 
  }
}



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
      case COMPANY_CHANGED:
        return Object.assign({}, state, { company: get(action, 'company', '' ) });
      case LAST_NAME_CHANGED:
        return Object.assign({}, state, { lastName: get(action, 'lastName', '' ) });
      case FIRST_NAME_CHANGED:
        return Object.assign({}, state, { firstName: get(action, 'firstName', '' )});
      case ADDRESS_CHANGED:
        return Object.assign({}, state, { address: get(action, 'address', '' ) });
      case CITY_CHANGED:
        return Object.assign({}, state, { city: get(action, 'city', '' ) });
      case PROVINCE_CHANGED:
        return Object.assign({}, state, { province: get(action, 'province', '' ) });
      case ZIP_CHANGED:
        return Object.assign({}, state, { zipCode: get(action, 'zipCode', '' ) });
    default:
      return state;
    }
  }