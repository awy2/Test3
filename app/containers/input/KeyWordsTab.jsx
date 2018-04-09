// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import type { Dispatch } from 'redux';
import RaisedButton from 'material-ui/RaisedButton/RaisedButton';

import { DropDown, AddKeyworkdControl, StringArrayEditor } from 'components';

import { keyword } from 'data';
import { keywordAction, keywordsOperations } from 'keywords';

type Props = {
    keywords: Array<keyword>,
    dispatch: Dispatch<keywordAction>,
};

type State = {
    selectedKeyword: ?keyword,
};

class KeywordsTab extends Component<Props, State> {
    state = {
        selectedKeyword: null,
    };

    onDelete = () => {
        const { dispatch } = this.props;
        const { selectedKeyword } = this.state;

        let deleteKeyword : keyword = null;

        if (selectedKeyword != null) {
            deleteKeyword = {
                _id: selectedKeyword.keyword,
                keyword: selectedKeyword.keyword,
                descriptions: selectedKeyword.descriptions,
            };

            this.setState({ selectedKeyword: null });
        }

        dispatch(keywordsOperations.keywordRemove(deleteKeyword));
    }

    onUpdate = (newDescriptions: Array<string>) => {
        const { dispatch } = this.props;
        const { selectedKeyword } = this.state;
        let updatedKeyword : keyword = null;

        if (selectedKeyword != null) {
            updatedKeyword = {
                _id: selectedKeyword.keyword,
                keyword: selectedKeyword.keyword,
                descriptions: newDescriptions,
            };

            this.setState({ selectedKeyword: updatedKeyword });
        }

        dispatch(keywordsOperations.keywordUpdate(updatedKeyword));
    }

    onKeywordDropDownChange = (selectedKeyword: keyword) => {
        this.setState({ selectedKeyword });
    }

    render() {
        const { keywords } = this.props;
        let dropdownDisplay = null;

        const { selectedKeyword: selectedKeyword = { descriptions: [] } } = this.state;
        const { descriptions: descriptions = [] } = selectedKeyword || { descriptions: [] };

        if (keywords
            && keywords.length) {
            dropdownDisplay = (
                <div className="keywords-selector">
                    <DropDown className="keywords-dropdown" onChange={this.onKeywordDropDownChange} data={keywords} displayName="keyword" valueField="keyword" />
                    <RaisedButton className="keywords-delete-button" label="delete" onClick={this.onDelete} />
                </div>);
        }

        return (
            <div className="keywords-tab">

                <AddKeyworkdControl />
                { dropdownDisplay }
                <StringArrayEditor data={descriptions} saveEvent={this.onUpdate} />

             
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

export default connect(mapStateToProps)(KeywordsTab);
