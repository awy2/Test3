// @flow

import get from 'lodash/get';
import * as types from './types';

export type PostingState = {
    +company: string;
    +contactLastName: string;
    +contactFirstName: string;
    +address: string;
    +city: string;
    +province: string;
    +zipCode: string;
    +position: string;
    +description: string;
};

const initialState: PostingState = {
    company: '',
    contactLastName: '',
    contactFirstName: '',
    address: '',
    city: '',
    province: 'BC',
    zipCode: '',
    position: '',
    description: '',
};

export default function reducers(state: PostingState = initialState, action: types.PostingActions) {
    switch (action.type) {
    case types.COMPANY_CHANGED:
        return Object.assign({}, state, { company: get(action, 'company', '') });
    case types.LAST_NAME_CHANGED:
        return Object.assign({}, state, { lastName: get(action, 'lastName', '') });
    case types.FIRST_NAME_CHANGED:
        return Object.assign({}, state, { firstName: get(action, 'firstName', '') });
    case types.ADDRESS_CHANGED:
        return Object.assign({}, state, { address: get(action, 'address', '') });
    case types.CITY_CHANGED:
        return Object.assign({}, state, { city: get(action, 'city', '') });
    case types.PROVINCE_CHANGED:
        return Object.assign({}, state, { province: get(action, 'province', '') });
    case types.ZIP_CHANGED:
        return Object.assign({}, state, { zipCode: get(action, 'zipCode', '') });
    case types.POSITION_CHANGED:
        return Object.assign({}, state, { position: get(action, 'position', '') });
    case types.DESCRIPTION_CHANGED:
        return Object.assign({}, state, { description: get(action, 'description', '') });
    default:
        return state;
    }
}
