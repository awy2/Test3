// @flow

import { Sentence } from 'data';

const BODY_ADD_SENTENCE = 'body/BODY_ADD_SENTENCE';
const BODY_REMOVE_SENTENCE = 'body/BODY_REMOVE_SENTENCE';
const BODY_UPDATE_SENTENCE = 'body/BODY_UPDATE_SENTENCE';
const BODY_MOVE_SENTENCE = 'body/BODY_MOVE_SENTENCE';

export type AddSentenceAction = { +type: 'body/BODY_ADD_SENTENCE', sentence: Sentence };
export type RemoveSentenceAction = { +type: 'body/BODY_REMOVE_SENTENCE', sentence: Sentence };
export type UpdateSentenceAction = { +type: 'body/BODY_UPDATE_SENTENCE', oldSentence: Sentence, newSentence: Sentence };
export type MoveSentencesAction = { +type: 'body/BODY_MOVE_SENTENCE', sentence: Sentence, oldPosition: number, newPosition: number };

export type BodyActions = AddSentenceAction
                            | RemoveSentenceAction
                            | UpdateSentenceAction
                            | MoveSentencesAction;


export {
    BODY_ADD_SENTENCE,
    BODY_REMOVE_SENTENCE,
    BODY_UPDATE_SENTENCE,
    BODY_MOVE_SENTENCE,
};
