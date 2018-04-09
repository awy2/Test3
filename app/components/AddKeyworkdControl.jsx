// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import type { Dispatch } from 'redux';

import TextField from 'material-ui/TextField/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import get from 'lodash/get';

import { keywordAction, keywordsOperations } from 'keywords';
import { keyword } from 'data';

type Props = {
    keywords: Array<keyword>,
    dispatch: Dispatch<keywordAction>,
};

type State = {
    newKeyword: string,
};

class AddKeyworkdControl extends Component<Props, State> {
    onAddKeywordClick = () => {
        const { dispatch } = this.props;
        const newKeyword : keyword = {
            _id: this.state.newKeyword,
            keyword: this.state.newKeyword,
            description: [],
        };

        if (this.props.keywords.length === 0
            || this.props.keywords.filter(keywordData => keywordData.keyword === this.state.newKeyword).length === 0) {
            dispatch(keywordsOperations.keywordInsert(newKeyword));
        }
    }

    onNewKeywordChange = (event: Event) => {
        const target = get(event, 'target', null);

        if (target instanceof HTMLInputElement) {
            this.setState({ newKeyword: target.value });
        }
    }

    render() {
        return (
            <div className="NewKeyword">
                <TextField onChange={this.onNewKeywordChange} name="newKeyword" />
                <FloatingActionButton mini={true} onClick={this.onAddKeywordClick} >
                    <ContentAdd />
                </FloatingActionButton>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const {
        keywords,
    } = state.keywords;

    return {
        keywords,
    };
};

export default connect(mapStateToProps)(AddKeyworkdControl);
