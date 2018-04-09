// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import FlatButton from 'material-ui/FlatButton/FlatButton';
import type { Dispatch } from 'redux';
import { bindActionCreators } from 'redux';

import { postingOperations, PostingAction } from 'posting';

type Props = {
    companyChange: Function,
    lastNameChange: Function,
    firstNameChange: Function,
    addressChange: Function,
    cityChange: Function,
    provinceChange: Function,
    zipCodeChange: Function,
    positionChange: Function,
    descriptionChange: Function,
};

class ExampleButton extends Component<Props> {

    onSampleClick = () => {
        const { 
            companyChange,
            firstNameChange,
            lastNameChange,
            addressChange,
            cityChange,
            provinceChange,
            zipCodeChange,
            positionChange,
            descriptionChange,
        } = this.props;

        companyChange('Example Company');
        firstNameChange('Hiring');
        lastNameChange('Manager');
        addressChange('1234 Fake Street');
        cityChange('Vancouver');
        provinceChange('BC');
        zipCodeChange('123 456');
        positionChange('Developer');
        descriptionChange(`More about You:
        Solid object oriented programming skills
        Great if you have experience in NodeJS, React/Redux, HTML5, CSS3, and JavaScript
        You are friendly, smart and easy to work with
        You understand the importance of building quality into your software
        You enjoy helping your colleagues and appreciate their guidance in return
        Confirmit offers you:
        
        Work/Life balance
        Personal development time to help you develop further in your interests and career.
        Competitive salary and benefits package
        Secure employment, average global R&D tenure is 8+ years.
        Culture of a small team operating within a global, successful company
        Casual work atmosphere, flexible work schedules, and a great team
        Exposure to a wide range of global customers and industries`);
    }

    render() {
        return (
            <FlatButton label="Example Posting" onClick={this.onSampleClick} className="print-pdf-button" />
        );
    }
}


const mapDispatchToProps = (dispatch: Dispatch<PostingAction>) => {
    return bindActionCreators({
        ...postingOperations,
    }, dispatch);
}; 


export default connect(null, mapDispatchToProps)(ExampleButton);
