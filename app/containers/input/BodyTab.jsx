import React, { Component } from 'react';
import { connect } from 'react-redux';

// eslint-disable-next-line react/prefer-stateless-function
class BodyTab extends Component {
    render() {
        return (
            <div className="bdoy-tab">
                <h1>Body</h1>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { state };
};

export default connect(mapStateToProps)(BodyTab);
