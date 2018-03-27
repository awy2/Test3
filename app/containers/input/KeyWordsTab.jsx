// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import type { Dispatch } from 'redux';
import FlatButton from 'material-ui/FlatButton/FlatButton';
import get from 'lodash/get';

import { keyword } from 'data';
import { keywordAction } from 'keywords';
import * as keywordsOperations from 'keywordsOperations';

type Props = {
    keywords: Array<keyword>,
    dispatch: Dispatch<keywordAction>,
};

class KeywordsTab extends Component<Props> {

    onGet = () => {
        const { dispatch } = this.props;
        keywordsOperations.keywordsGet(dispatch);
    }

    onAdd = () => {
        const { dispatch } = this.props;
        const test : keyword = {
            _id: 'html',
            keyword: 'html',
            description: ['123'],
        } 

        dispatch(keywordsOperations.keywordInsert(test));
    }

    onDelete = () => {
        const { dispatch } = this.props;
        const test : keyword = {
            _id: 'html',
            keyword: 'html',
            description: ['123'],
        } 

        dispatch(keywordsOperations.keywordRemove(test));
    }
   
    onUpdate = () => {
        const { dispatch } = this.props;
        const test : keyword = {
            _id: 'html',
            keyword: 'html',
            description: ['123123'],
        } 
        
        dispatch(keywordsOperations.keywordUpdate(test));
    }

    render() {
        let display = [];
        const { keywords } = this.props         

        if (keywords 
            && keywords.length){
            display = keywords.map( keywordObject => <span> { get(keywordObject, 'description[0]', '') }</span>);
        }

        return (
            <div className="keywords-tab">
                { display }

                <FlatButton label="get" onClick={this.onGet} />
                <FlatButton label="test" onClick={this.onAdd} />
                <FlatButton label="delete" onClick={this.onDelete} />
                <FlatButton label="update" onClick={this.onUpdate} />
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
