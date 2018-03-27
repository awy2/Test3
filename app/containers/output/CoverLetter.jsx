import React, { Component } from 'react';
import { connect } from 'react-redux';

class CoverLetter extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        const date = new Date();

        const {
            company,
            contactLastName,
            contactFirstName,
            address,
            city,
            province,
            zipCode,
        } = this.props;

        const location =  `${address}${city && address ? ', ' : ''}${city}`

        return (
            <div id="coverLetter">
                <p>{ date.toDateString() }</p>

                <p>{ company }</p>
                <p>{ location }</p>
                <p>{ province }</p>
                <p>{ zipCode }</p>
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
        zipCode,
    } = state.posting;

    return {
        company,
        contactLastName,
        contactFirstName,
        address,
        city,
        province,
        zipCode,
    };
};

export default connect(mapStateToProps)(CoverLetter);
