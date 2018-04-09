// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import type { Dispatch } from 'redux';
import { keyword, Sentence } from 'data';

import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import ChipInput from 'material-ui-chip-input/lib/ChipInput'
import Chip from 'material-ui/Chip/Chip';

import { postingSelectors } from 'posting';

import { keywordsSelectors } from 'keywords';
import { getUsedKeywords } from 'util';
import { KeywordControl, IntroControl, DraggableChips } from 'components';
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

@DragDropContext(HTML5Backend)
class IntroTab extends Component<Props, State> {

    onChipDelete = (deleteSentence: Sentence) => {
        debugger
        this.props.removeSentence(deleteSentence);
    }

    getUsedKeywords = () => {
        const { keywords, description } = this.props;
        let usedKeywords = getUsedKeywords(keywords, description);
        
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
        let { intro } = this.props;
        let toMove = null;

        if (intro.length > oldPosition){
            toMove = intro[oldPosition];        
            this.props.moveSentence(toMove, oldPosition, newPosition);
        }
    }

    render() {
        let { 
            keywords, 
            introKeywords, 
            description, 
            intro
        } = this.props;
        let keywordsUsed = this.getUsedKeywords();

        return (
            <div className="intro-tab">
                <IntroControl keywords={introKeywords} onClickCallBack={this.addToIntro} header="Introduction" />
                <KeywordControl keywords={keywordsUsed} onClickCallBack={this.addToIntro} header="Keywords" />
                    {/*
                { intro.map((introSentence) => {
                        return (<Chip key={introSentence.id} onRequestDelete={() => { this.onChipDelete(introSentence) }} className="sentenceChips" >
                                    {introSentence.title}
                                </Chip>);
                    }) }
                */}

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
