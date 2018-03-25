// @flow

import type {
    CompanyChangedAction,
    LastNameChangedAction,
    FirstNameChangedAction,
    AddressChangedAction,
    CityChangedAction,
    ProvinceChangedAction,
    ZipChangedAction,
    PositionChangedAction,
    DescriptionChangedAction,
} from './types';

import * as action from './actions';

const companyChange = (company: string): CompanyChangedAction => {
    return action.companyChange(company);
};

const lastNameChange = (lastName: string): LastNameChangedAction => {
    return action.lastNameChange(lastName);
};

const firstNameChange = (firstName: string): FirstNameChangedAction => {
    return action.firstNameChange(firstName);
};

const addressChange = (address: string): AddressChangedAction => {
    return action.addressChange(address);
};

const cityChange = (city: string): CityChangedAction => {
    return action.cityChange(city);
};

const provinceChange = (province: string): ProvinceChangedAction => {
    return action.provinceChange(province);
};

const zipCodeChange = (zipCode: string): ZipChangedAction => {
    return action.zipCodeChange(zipCode);
};

const positionChange = (position: string): PositionChangedAction => {
    return action.positionChange(position);
};

const descriptionChange = (description: string): DescriptionChangedAction => {
    return action.descriptionChange(description);
};

export default {
    companyChange,
    lastNameChange,
    firstNameChange,
    addressChange,
    cityChange,
    provinceChange,
    zipCodeChange,
    positionChange,
    descriptionChange,
};
