import React, { Component } from 'react';
import { connect } from 'react-redux';

class CoverLetter extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div id="coverLetter">
                <h4>{ this.props.company }</h4>
                <h4>{ this.props.address }</h4>
                <h4>{ this.props.city }</h4>
                <h4>{ this.props.province }</h4>
                <h4>{ this.props.zipcode }</h4>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const {
        company,
        contactLastName,
        contactFirstName,
        address,
        city,
        province,
        zipcode,
    } = state.contact;

    return {
        company,
        contactLastName,
        contactFirstName,
        address,
        city,
        province,
        zipcode,
    };
};

export default connect(mapStateToProps)(CoverLetter);
