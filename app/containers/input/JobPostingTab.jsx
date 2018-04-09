// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import type { Dispatch } from 'redux';

import { postingOperations, postingSelectors } from 'posting';
import { keywordsSelectors } from 'keywords';
import { keyword } from 'data';

import ContactInputs from './ContactInputs';
import Description from './Description';

type Props = {
    description: string,
    keywords: Array<keyword>,
    descriptionChange: Function,
};

type State = {
    highligthScroll: number;
};

class JobPostingTab extends Component<Props, State> {
    // TODO: figure out how to handle textarea even for flow
    onDescriptionChange = (event: Object) => {
        
        const { target = {} } = event;
        const { value = null } = target;
        
        if (value) {
            this.props.descriptionChange(value);
        }
    }

    render() {
        return (
            <div className="job-posting-tab">
                <ContactInputs />
                <Description description={this.props.description} keywords={this.props.keywords} onChangeEvent={this.onDescriptionChange} />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch: Dispatch<Object>) => {
    return bindActionCreators({
        descriptionChange: postingOperations.descriptionChange,
    }, dispatch);
};

const mapStateToProps = (state) => {
    return {
        description: postingSelectors.getDescription(state),
        keywords: keywordsSelectors.getKeywords(state),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(JobPostingTab);
