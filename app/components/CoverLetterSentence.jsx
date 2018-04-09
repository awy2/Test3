// @flow

import React, { Component } from 'react';
import type { PostingDisplayField } from 'posting/types';
import { specialWordsIdentifier } from 'data/sentence';

type Props = {
    sentence: Object,
    postingField: PostingDisplayField,
};

type State = {

};

export default class CoverLetterSentence extends Component<Props, State> {
    getDisplay = () => {
        const { sentence: SentenceObj } = this.props;
        const { postingField: postingObj } = this.props;

        let DisplayValue = this.checkSentenceEnding(SentenceObj.value);

        if (postingObj){
            specialWordsIdentifier.forEach( (key, value) => {
                if (postingObj[value] !== "undefined"){
                    DisplayValue = DisplayValue.replace(key, postingObj[value]);
                }
            });
        }

        return DisplayValue;
    }

    checkSentenceEnding = (newSentence: string): string => {
        let updatedSentence: string = '';
    
        if (typeof (newSentence) === 'string'){
            updatedSentence = newSentence.trim();
            updatedSentence = updatedSentence.endsWith('.') ? `${updatedSentence} ` : `${updatedSentence}. `;
        }
    
        return updatedSentence;
    }

    render() {
        const { sentence: SentenceObj } = this.props;
        return (
            <span key={`coverletter_${SentenceObj.id}`}>{ this.getDisplay() }</span>
        );
    }
}
