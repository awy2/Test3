// @flow
import type { PostingState } from './reducers';
import type { PostingDisplayField } from './types';

type GlobalState = {
    posting: PostingState;
};

function getCompany(state: GlobalState): string {
    return state.posting.company;
}

function getLastName(state: GlobalState): string {
    return state.posting.lastName;
}

function getFirstName(state: GlobalState): string {
    return state.posting.firstName;
}

function getAddress(state: GlobalState): string {
    return state.posting.address;
}

function getCity(state: GlobalState): string {
    return state.posting.city;
}

function getProvince(state: GlobalState): string {
    return state.posting.province;
}

function getZipCode(state: GlobalState): string {
    return state.posting.zipCode;
}

function getPosition(state: GlobalState): string {
    return state.posting.position;
}

function getDescription(state: GlobalState): string {
    return state.posting.description;
}

function getDisplayProps(state: GlobalState): PostingDisplayField {
    return {
        company: state.posting.company,
        lastName: state.posting.lastName,
        firstName: state.posting.firstName,
        address: state.posting.address,
        city: state.posting.city,
        province: state.posting.province,
        zipCode: state.posting.zipCode,
        position: state.posting.position,
    };
}

export {
    getCompany,
    getLastName,
    getFirstName,
    getAddress,
    getCity,
    getProvince,
    getZipCode,
    getPosition,
    getDescription,
    getDisplayProps,
};
