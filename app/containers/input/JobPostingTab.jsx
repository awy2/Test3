import React, { Component } from 'react';
import { connect } from 'react-redux';

import ContactInputs from './ContactInputs';
import Description from './Description';

// eslint-disable-next-line react/prefer-stateless-function
class JobPostingTab extends Component {
    render() {
        return (
            <div className="job-posting-tab">
                <ContactInputs />
                <Description />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        state,
    };
};

export default connect(mapStateToProps)(JobPostingTab);
