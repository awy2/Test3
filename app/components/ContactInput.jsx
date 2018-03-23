import React, { Component } from 'react';
import { connect } from 'react-redux';

import TextField from 'material-ui/TextField';
import get  from 'lodash/get';

class ContactInput extends Component {

    render() {
        return (
            <div>
                <TextField 
                hintText={this.props.LabelName}
                floatingLabelText={this.props.LabelName}
                onChange={this.props.onTextChange}
                />
            </div>
        )
    } 
}

export default ContactInput;