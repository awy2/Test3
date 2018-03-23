//@flow

export type Contact = {
    +company: string,
    +contactLastName: string,
    +contactFirstName: string,
    +address: string,
    +city: string,
    +province: string,
    +zipCode: string
};


const COMPANY_CHANGED = 'contact/COMPANY_CHANGED';
const LAST_NAME_CHANGED = 'contact/LAST_NAME_CHANGED';
const FIRST_NAME_CHANGED = 'contact/FIRST_NAME_CHANGED';
const ADDRESS_CHANGED = 'contact/ADDRESS_CHANGED';
const CITY_CHANGED = 'contact/CITY_CHANGED';
const PROVINCE_CHANGED = 'contact/PROVINCE_CHANGED';
const ZIP_CHANGED = 'contact/ZIP_CHANGED';

export {
    COMPANY_CHANGED,
    LAST_NAME_CHANGED,
    FIRST_NAME_CHANGED,
    ADDRESS_CHANGED,
    CITY_CHANGED,
    PROVINCE_CHANGED,
    ZIP_CHANGED
};