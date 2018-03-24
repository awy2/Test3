import React, { Component } from 'react';
import { connect } from 'react-redux';

import TextField from 'material-ui/TextField';
import { contactOperations } from 'contactOperations';

class ContactTab extends Component {
    onCompanyChange = (event) => {
        const { dispatch } = this.props;
        dispatch(contactOperations.companyChange(event.target.value));
    }

    onLastNameChange = (event) => {
        const { dispatch } = this.props;
        dispatch(contactOperations.lastNameChange(event.target.value));
    }

    onFirstNameChange = (event) => {
        const { dispatch } = this.props;
        dispatch(contactOperations.firstNameChange(event.target.value));
    }

    onAddressChange = (event) => {
        const { dispatch } = this.props;
        dispatch(contactOperations.cityChange(event.target.value));
    }

    onCityChange = (event) => {
        const { dispatch } = this.props;
        dispatch(contactOperations.addressChange(event.target.value));
    }

    onProvinceChange = (event) => {
        const { dispatch } = this.props;
        dispatch(contactOperations.provinceChange(event.target.value));
    }

    onZipCodeChange = (event) => {
        const { dispatch } = this.props;
        dispatch(contactOperations.zipCodeChange(event.target.value));
    }

    onPositionChange = (event) => {
        const { dispatch } = this.props;
        dispatch(contactOperations.positionChangeChange(event.target.value));
    }

    render() {
        return (
            <div className="contact-tab">
                <TextField onChange={this.onCompanyChange} hintText="Company" floatingLabelText="Company" />
                <TextField onChange={this.onLastNameChange} hintText="Last Name" floatingLabelText="Last Name" />
                <TextField onChange={this.onFirstNameChange} hintText="First Name" floatingLabelText="First Name" />
                <TextField onChange={this.onAddressChange} hintText="Address" floatingLabelText="Address" />
                <TextField onChange={this.onCityChange} hintText="City" floatingLabelText="City" />
                <TextField onChange={this.onProvinceChange} hintText="Province" floatingLabelText="Province" />
                <TextField onChange={this.onZipCodeChange} hintText="Zip Code" floatingLabelText="Zip Code" />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { state };
};

export default connect(mapStateToProps)(ContactTab);
