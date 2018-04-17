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
import { endOperations, endSelectors } from 'end';

type Props = {
    endKeywords: Array<keyword>,
    keywords: Array<keyword>,
    description: string,
    addSentence: Function,
    removeSentence: Function,
    moveSentence: Function,
    end: Array<Sentence>,
};

type State = {

};

class EndTab extends Component<Props, State> {
    onChipDelete = (deleteSentence: Sentence) => {
        this.props.removeSentence(deleteSentence);
    }

    getUsedKeywords = () => {
        const { keywords, description } = this.props;
        const usedKeywords = getUsedKeywords(keywords, description);

        return usedKeywords; 
    }

    addToEnd = (selectedKeyword: keyword, sentenceToAdd: string) => {
        const newSentence: Sentence = new Sentence({
            value: sentenceToAdd,
            title: selectedKeyword.keyword,
        });

        this.props.addSentence(newSentence);
    }

    moveCard = (oldPosition, newPosition) => {
        const { end } = this.props;
        let toMove = null;

        if (end.length > oldPosition) {
            toMove = end[oldPosition];
            this.props.moveSentence(toMove, oldPosition, newPosition);
        }
    }

    render() {
        const {
            keywords,
            endKeywords,
            description,
            end,
        } = this.props;
        const keywordsUsed = this.getUsedKeywords();

        return (
            <div className="end-tab">
                <ParagraphControl keywords={endKeywords} onClickCallBack={this.addToEnd} header="End" />
                <KeywordControl keywords={keywordsUsed} onClickCallBack={this.addToEnd} header="Keywords" />

                {end.map((card, i) => (
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
        addSentence: endOperations.addSentence,
        removeSentence: endOperations.removeSentence,
        moveSentence: endOperations.moveSentence,
    }, dispatch);
};

const mapStateToProps = (state) => {
    return {
        description: postingSelectors.getDescription(state),
        endKeywords: keywordsSelectors.getUnusedEndKeywords(state),
        keywords: keywordsSelectors.getKeywords(state),
        end: endSelectors.getEnd(state),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EndTab);
