// @flow

const COMPANY_CHANGED = 'COMPANY_CHANGED';
const LAST_NAME_CHANGED = 'LAST_NAME_CHANGED';
const FIRST_NAME_CHANGED = 'FIRST_NAME_CHANGED';
const ADDRESS_CHANGED = 'ADDRESS_CHANGED';
const CITY_CHANGED = 'CITY_CHANGED';
const PROVINCE_CHANGED = 'PROVINCE_CHANGED';
const ZIP_CHANGED = 'ZIP_CHANGED';
const POSITION_CHANGED = 'POSITION_CHANGED';
const DESCRIPTION_CHANGED = 'DESCRIPTION_CHANGED';

export type PostingDisplayField = {
    +company: string;
    +lastName: string;
    +firstName: string;
    +address: string;
    +city: string;
    +province: string;
    +zipCode: string;
    +position: string;
};

export type CompanyChangedAction = { +type: 'COMPANY_CHANGED', company: string };
export type LastNameChangedAction = { +type: 'LAST_NAME_CHANGED', lastName: string };
export type FirstNameChangedAction = { +type: 'FIRST_NAME_CHANGED', firstName: string };
export type AddressChangedAction = { +type: 'ADDRESS_CHANGED', address: string };
export type CityChangedAction = { +type: 'CITY_CHANGED', city: string };
export type ProvinceChangedAction = { +type: 'PROVINCE_CHANGED', province: string };
export type ZipChangedAction = { +type: 'ZIP_CHANGED', zipCode: string };
export type PositionChangedAction = { +type: 'POSITION_CHANGED', position: string };
export type DescriptionChangedAction = { +type: 'DESCRIPTION_CHANGED', description: string };

export type PostingActions = CompanyChangedAction
                            | LastNameChangedAction
                            | FirstNameChangedAction
                            | AddressChangedAction
                            | CityChangedAction
                            | ProvinceChangedAction
                            | ZipChangedAction
                            | PositionChangedAction
                            | DescriptionChangedAction;
export {
    COMPANY_CHANGED,
    LAST_NAME_CHANGED,
    FIRST_NAME_CHANGED,
    ADDRESS_CHANGED,
    CITY_CHANGED,
    PROVINCE_CHANGED,
    ZIP_CHANGED,
    POSITION_CHANGED,
    DESCRIPTION_CHANGED,
};
