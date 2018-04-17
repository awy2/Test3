// @flow

import React, { Component } from 'react';

import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Subheader from 'material-ui/Subheader/Subheader';
import Label from 'material-ui/svg-icons/action/label';
import AddCircle from 'material-ui/svg-icons/content/add-circle';
import { DragSource, DropTarget } from 'react-dnd'

import { keyword } from 'data';
import KeywordControl from './KeywordControl';

type Props = {
    header: string, 
    keywords: Array<keyword>,
    onClickCallBack: Function,
};

export default class ParagraphControl extends KeywordControl {

    props: Props;

    getSubItems = (parentKeyword: keyword) : Array<ListItem> => {
        let descriptionListItem = []
        let { descriptions = [] } = parentKeyword;

        if ( descriptions
            && descriptions.length){
            descriptionListItem = descriptions.map((descriptionString, index) => {
                return  (
                    <ListItem 
                        key={`${parentKeyword.keyword}_${descriptionString}`} 
                        primaryText={descriptionString} 
                        rightIcon={<AddCircle />}
                        onClick={() => { this.props.onClickCallBack(parentKeyword, descriptionString); }}
                    />);
            });
        }

        return descriptionListItem;
    }

    getListItem = () : Array<ListItem> => {
        const { keywords = [] } = this.props;
        let keywordsListItem = []

        if (keywords.length){
            keywordsListItem = keywords.map((keywordObj) => {
                return (
                    <ListItem
                        key={`${keywordObj.keyword}_Parent`} 
                        primaryText={keywordObj.keyword}
                        leftIcon={<Label />}
                        primaryTogglesNestedList={true}
                        nestedItems={this.getSubItems(keywordObj)}
                    />);
            })
        }

        return keywordsListItem;
    }

    render() {
        const keywordsList = this.getListItem();

        return (
            <div>
                <List>
                    <Subheader>{this.props.header}</Subheader>
                    { keywordsList }
                </List> 
            </div>
        );
    }
}
