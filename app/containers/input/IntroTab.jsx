import React, { Component } from 'react';
import { connect } from 'react-redux';

// eslint-disable-next-line react/prefer-stateless-function
class IntroTab extends Component {
    render() {
        return (
            <div className="intro-tab">
                <h1>Placeholder</h1>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        state,
    };
};

export default connect(mapStateToProps)(IntroTab);
