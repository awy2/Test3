import React, { Component } from 'react';
import { connect } from 'react-redux';

import ContactInput  from 'components/ContactInput';
import { contactOperations } from 'contactOperations';

class ContactTab extends Component {

    onCompanyChange = ( event ) => {
        const { dispatch } = this.props;
        dispatch( contactOperations.companyChange(event.target.value) );
    }

    onLastNameChange = ( event ) => {
        const { dispatch } = this.props;
        dispatch( contactOperations.lastNameChange(event.target.value) );
    }

    onFirstNameChange = ( event ) => {
        const { dispatch } = this.props;
        dispatch( contactOperations.firstNameChange(event.target.value) );
    }

    onAddressChange = ( event ) => {
        const { dispatch } = this.props;
        dispatch( contactOperations.cityChange(event.target.value) );
    }

    onCityChange = ( event ) => {
        const { dispatch } = this.props;
        dispatch( contactOperations.addressChange(event.target.value) );
    }

    onProvinceChange = ( event ) => {
        const { dispatch } = this.props;
        dispatch( contactOperations.provinceChange(event.target.value) );
    }
  
    onZipCodeChange = ( event ) => {
        const { dispatch } = this.props;
        dispatch( contactOperations.zipCodeChange(event.target.value) );
    }

    render() {
      return (
        <div className="contact-tab">
            <ContactInput onTextChange={this.onCompanyChange} LabelName="Company" />
            <ContactInput onTextChange={this.onLastNameChange} LabelName="Last Name" />
            <ContactInput onTextChange={this.onFirstNameChange} LabelName="First Name" />
            <ContactInput onTextChange={this.onAddressChange} LabelName="Address" />
            <ContactInput onTextChange={this.onCityChange} LabelName="City" />
            <ContactInput onTextChange={this.onProvinceChange} LabelName="Province" />
            <ContactInput onTextChange={this.onZipCodeChange} LabelName="Zip Code" />
        </div>
      )
    }
}

const mapStateToProps = ( state ) => {

    return { };
}

export default connect(mapStateToProps)(ContactTab);
