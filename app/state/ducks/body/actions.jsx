// @flow

import { Sentence } from 'data';
import * as types from './types';

const addSentence = (newSentence: Sentence) : types.AddSentenceAction => {
    return {
        type: types.BODY_ADD_SENTENCE,
        sentence: newSentence,
    };
};

const removeSentence = (sentenceToRemove: Sentence) : types.RemoveSentenceAction => {
    return {
        type: types.BODY_REMOVE_SENTENCE,
        sentence: sentenceToRemove,
    };
};

const updateSentence = (oldSentence: Sentence, newSentence: Sentence) : types.UpdateSentenceAction => {
    return {
        type: types.BODY_UPDATE_SENTENCE,
        oldSentence,
        newSentence,
    };
};

const moveSentence = (sentenceToMove: Sentence, oldPosition: number, newPosition: number) : types.MoveSentencesAction => {
    return {
        type: types.BODY_MOVE_SENTENCE,
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

