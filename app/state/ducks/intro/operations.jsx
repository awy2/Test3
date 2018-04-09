// @flow

import { checkSentenceEnding } from 'util';
import { sentence, Sentence } from 'data';
import * as types from './types';
import * as action from './actions';


const addSentence = (newSentence: Sentence): types.AddSentenceAction => {
    return action.addSentence(newSentence);
};

const removeSentence = (sentenceToRemove: Sentence): types.RemoveSentenceAction => {
    return action.removeSentence(sentenceToRemove);
};

const updateSentence = (oldSentence: Sentence, newSentence: Sentence): types.UpdateSentenceAction => {
    return action.updateSentence(oldSentence, newSentence);
};

const moveSentence = (sentenceToMove: Sentence, oldPosition: number, newPosition: number): types.MoveSentencesAction => {
    return action.moveSentence(sentenceToMove, oldPosition, newPosition);
};

export {
    addSentence,
    removeSentence,
    updateSentence,
    moveSentence,
};
