import React, { Component } from 'react';
import { connect } from 'react-redux';

class IntroTab extends Component {
    render() {
        return (
            <div className="intro-tab">
                <h1>asdf</h1>
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
