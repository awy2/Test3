// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import type { Dispatch } from 'redux';
import get from 'lodash/get';

import TextField from 'material-ui/TextField/TextField';
import { postingOperations, PostingActions } from 'postingOperations';

type Props = {
    company: string,
    lastName: string,
    firstName: string,
    address: string,
    city: string,
    province: string,
    zipCode: string,
    position: string,
    dispatch: Dispatch<PostingActions>,
};

class ContactInputs extends Component<Props> {
    onCompanyChange = (event: Event) => {
        const { dispatch } = this.props;
        const target = get(event, 'target', null);

        if (target instanceof HTMLInputElement) {
            dispatch(postingOperations.companyChange(target.value));
        }
    }

    onLastNameChange = (event) => {
        const { dispatch } = this.props;
        const target = get(event, 'target', null);        

        if (target instanceof HTMLInputElement) {
            dispatch(postingOperations.lastNameChange(target.value));
        }
    }

    onFirstNameChange = (event) => {
        const { dispatch } = this.props;
        const target = get(event, 'target', null);

        if (target instanceof HTMLInputElement) {
            dispatch(postingOperations.firstNameChange(target.value));
        }
    }

    onAddressChange = (event) => {
        const { dispatch } = this.props;
        const target = get(event, 'target', null);

        if (target instanceof HTMLInputElement) {
            dispatch(postingOperations.addressChange(target.value));
        }
    }

    onCityChange = (event) => {
        const { dispatch } = this.props;
        const target = get(event, 'target', null);

        if (target instanceof HTMLInputElement) {
            dispatch(postingOperations.cityChange(target.value));
        }
    }

    onProvinceChange = (event) => {
        const { dispatch } = this.props;
        const target = get(event, 'target', null);

        if (target instanceof HTMLInputElement) {
            dispatch(postingOperations.provinceChange(target.value));
        }
    }

    onZipCodeChange = (event) => {
        const { dispatch } = this.props;
        const target = get(event, 'target', null);

        if (target instanceof HTMLInputElement) {
            dispatch(postingOperations.zipCodeChange(target.value));
        }
    }

    onPositionChange = (event) => {
        const { dispatch } = this.props;
        const target = get(event, 'target', null);

        if (target instanceof HTMLInputElement) {
            dispatch(postingOperations.positionChange(target.value));
        }
    }

    render() {
        return (
            <div className="contact-tab">
                <TextField onChange={this.onCompanyChange} floatingLabelText="Company" value={this.props.company} />
                <TextField onChange={this.onLastNameChange} floatingLabelText="Last Name" value={this.props.lastName} />
                <TextField onChange={this.onFirstNameChange} floatingLabelText="First Name" value={this.props.firstName} />
                <TextField onChange={this.onAddressChange} floatingLabelText="Address" value={this.props.address} />
                <TextField onChange={this.onCityChange} floatingLabelText="City" value={this.props.city} />
                <TextField onChange={this.onProvinceChange} floatingLabelText="Province" value={this.props.province} />
                <TextField onChange={this.onZipCodeChange} floatingLabelText="Zip Code" value={this.props.zipCode} />
                <TextField onChange={this.onPositionChange} floatingLabelText="Position" value={this.props.position} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const {
        company,
        lastName,
        firstName,
        address,
        city,
        province,
        zipCode,
        position,
    } = state.posting;

    return {
        company,
        lastName,
        firstName,
        address,
        city,
        province,
        zipCode,
        position,
    };
};

export default connect(mapStateToProps)(ContactInputs);
