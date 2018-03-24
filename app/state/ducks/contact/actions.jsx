// @flow

import * as types from './types';

const companyChange = (company: string) : types.CompanyChangedAction => {
    return {
        type: types.COMPANY_CHANGED,
        company,
    };
};

const lastNameChange = (lastName: string) : types.LastNameChangedAction => {
    return {
        type: types.LAST_NAME_CHANGED,
        lastName,
    };
};

const firstNameChange = (firstName: string) : types.FirstNameChangedAction => {
    return {
        type: types.FIRST_NAME_CHANGED,
        firstName,
    };
};

const addressChange = (address: string) : types.AddressChangedAction => {
    return {
        type: types.ADDRESS_CHANGED,
        address,
    };
};

const cityChange = (city: string) : types.CityChangedAction => {
    return {
        type: types.CITY_CHANGED,
        city,
    };
};

const provinceChange = (province: string) : types.ProvinceChangedAction => {
    return {
        type: types.PROVINCE_CHANGED,
        province,
    };
};

const zipCodeChange = (zipCode: string) : types.ZipChangedAction => {
    return {
        type: types.ZIP_CHANGED,
        zipCode,
    };
};

const positionChange = (position: string) : types.PositionChangedAction => {
    return {
        type: types.POSITION_CHANGED,
        position,
    };
};

export {
    companyChange,
    lastNameChange,
    firstNameChange,
    addressChange,
    cityChange,
    provinceChange,
    zipCodeChange,
    positionChange,
};
