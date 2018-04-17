// @flow

import { Sentence } from 'data';
import * as types from './types';

const addSentence = (newSentence: Sentence) : types.AddSentenceAction => {
    return {
        type: types.END_ADD_SENTENCE,
        sentence: newSentence,
    };
};

const removeSentence = (sentenceToRemove: Sentence) : types.RemoveSentenceAction => {
    return {
        type: types.END_REMOVE_SENTENCE,
        sentence: sentenceToRemove,
    };
};

const updateSentence = (oldSentence: Sentence, newSentence: Sentence) : types.UpdateSentenceAction => {
    return {
        type: types.END_UPDATE_SENTENCE,
        oldSentence,
        newSentence,
    };
};

const moveSentence = (sentenceToMove: Sentence, oldPosition: number, newPosition: number) : types.MoveSentencesAction => {
    return {
        type: types.END_MOVE_SENTENCE,
        sentence: sentenceToMove,
        oldPosition,
        newPosition,
    };
};

export {
    addSentence,
    removeSentence,
    updateSentence,
    moveSentence,
};

