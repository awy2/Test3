// @flow

import { sentence, Sentence } from 'data';
import * as types from './types';

const addSentence = (newSentence: Sentence) : types.AddSentenceAction => {
    return {
        type: types.INTRO_ADD_SENTENCE,
        sentence: newSentence,
    };
};

const removeSentence = (sentenceToRemove: Sentence) : types.RemoveSentenceAction => {
    return {
        type: types.INTRO_REMOVE_SENTENCE,
        sentence: sentenceToRemove,
    };
};

const updateSentence = (oldSentence: Sentence, newSentence: Sentence) : types.UpdateSentenceAction => {
    return {
        type: types.INTRO_UPDATE_SENTENCE,
        oldSentence,
        newSentence,
    };
};

const moveSentence = (sentenceToMove: Sentence, oldPosition: number, newPosition: number) : types.MoveSentencesAction => {
    return {
        type: types.INTRO_MOVE_SENTENCE,
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

