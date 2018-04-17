// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import type { Dispatch } from 'redux';

import { keyword, Sentence } from 'data';
import { postingSelectors } from 'posting';
import { keywordsSelectors } from 'keywords';
import { getUsedKeywords } from 'util';
import { KeywordControl, ParagraphControl, DraggableChips } from 'components';
import { bodyOperations, bodySelectors } from 'body';

type Props = {
    bodyKeywords: Array<keyword>,
    keywords: Array<keyword>,
    description: string,
    addSentence: Function,
    removeSentence: Function,
    moveSentence: Function,
    body: Array<Sentence>,
};

type State = {

};


class BodyTab extends Component<Props, State> {

    onChipDelete = (deleteSentence: Sentence) => {
        this.props.removeSentence(deleteSentence);
    }

    getUsedKeywords = () => {
        const { keywords, description } = this.props;
        let usedKeywords = getUsedKeywords(keywords, description);
        
        return usedKeywords; 
    }

    addToBody = (selectedKeyword: keyword, sentenceToAdd: string) => {
        const newSentence: Sentence = new Sentence({
            value: sentenceToAdd,
            title: selectedKeyword.keyword,
        });

        this.props.addSentence(newSentence);
    }

    moveCard = (oldPosition, newPosition) => {
        let { body } = this.props;
        let toMove = null;

        if (body.length > oldPosition){
            toMove = body[oldPosition];        
            this.props.moveSentence(toMove, oldPosition, newPosition);
        }
    }

    render() {
        let { 
            keywords, 
            bodyKeywords, 
            description, 
            body
        } = this.props;
        let keywordsUsed = this.getUsedKeywords();

        return (
            <div className="body-tab">
                <ParagraphControl keywords={bodyKeywords} onClickCallBack={this.addToBody} header="Body" />
                <KeywordControl keywords={keywordsUsed} onClickCallBack={this.addToBody} header="Keywords" />

                {body.map((card, i) => (
                    <DraggableChips
                        key={card.id}
                        index={i}
                        id={card.id}
                        text={card.value}
                        moveCard={this.moveCard}
                        onRequestDelete={this.onChipDelete}
                        data={card}
                    />
                ))}
                
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch: Dispatch<Object>) => {
    return bindActionCreators({
        addSentence: bodyOperations.addSentence,
        removeSentence: bodyOperations.removeSentence,
        moveSentence: bodyOperations.moveSentence,
    }, dispatch);
};

const mapStateToProps = (state) => {
    return {
        description: postingSelectors.getDescription(state),
        bodyKeywords: keywordsSelectors.getUnusedBodyKeywords(state),
        keywords: keywordsSelectors.getKeywords(state),
        body: bodySelectors.getBody(state),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BodyTab);
