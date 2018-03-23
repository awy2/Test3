import * as types from './types';

const companyChange = (company) => {
    return {
        type: types.COMPANY_CHANGED,
        company 
    }
}   

const lastNameChange = (lastName) => {
    return {  
        type: types.LAST_NAME_CHANGED,
        lastName 
    }
}

const firstNameChange = (firstName) => {
    return {
        type: types.FIRST_NAME_CHANGED,
        firstName 
    }
}

const addressChange = (address) => {
    return {
        type: types.ADDRESS_CHANGED,
        address 
    }
}

const cityChange = (city) => {
    return {
        type: types.CITY_CHANGED,
        city 
    }
}

const provinceChange = (province) => {
    return {
        type: types.PROVINCE_CHANGED,
        province 
    }
}

const zipCodeChange = (zipCode) => {
    return {
        type: types.ZIP_CHANGED,
        zipCode 
    }
}

export {
    companyChange,
    lastNameChange,
    firstNameChange,
    addressChange,
    cityChange,
    provinceChange,
    zipCodeChange
};