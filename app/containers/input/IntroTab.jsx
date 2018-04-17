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
import { introOperations, introSelectors } from 'intro';

type Props = {
    introKeywords: Array<keyword>,
    keywords: Array<keyword>,
    description: string,
    addSentence: Function,
    removeSentence: Function,
    moveSentence: Function,
    intro: Array<Sentence>,
};

type State = {

};

class IntroTab extends Component<Props, State> {
    onChipDelete = (deleteSentence: Sentence) => {
        this.props.removeSentence(deleteSentence);
    }

    getUsedKeywords = () => {
        const { keywords, description } = this.props;
        const usedKeywords = getUsedKeywords(keywords, description);

        return usedKeywords;
    }

    addToIntro = (selectedKeyword: keyword, sentenceToAdd: string) => {
        const newSentence: Sentence = new Sentence({
            value: sentenceToAdd,
            title: selectedKeyword.keyword,
        });

        this.props.addSentence(newSentence);
    }

    moveCard = (oldPosition, newPosition) => {
        const { intro } = this.props;
        let toMove = null;

        if (intro.length > oldPosition) {
            toMove = intro[oldPosition];
            this.props.moveSentence(toMove, oldPosition, newPosition);
        }
    }

    render() {
        const {
            keywords,
            introKeywords,
            description,
            intro,
        } = this.props;
        const keywordsUsed = this.getUsedKeywords();

        return (
            <div className="intro-tab">
                <ParagraphControl keywords={introKeywords} onClickCallBack={this.addToIntro} header="Introduction" />
                <KeywordControl keywords={keywordsUsed} onClickCallBack={this.addToIntro} header="Keywords" />

                {intro.map((card, i) => (
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
        addSentence: introOperations.addSentence,
        removeSentence: introOperations.removeSentence,
        moveSentence: introOperations.moveSentence,
    }, dispatch);
};

const mapStateToProps = (state) => {
    return {
        description: postingSelectors.getDescription(state),
        introKeywords: keywordsSelectors.getUnusedIntroKeywords(state),
        keywords: keywordsSelectors.getKeywords(state),
        intro: introSelectors.getIntro(state),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(IntroTab);
