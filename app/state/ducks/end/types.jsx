// @flow

import { Sentence } from 'data';

const END_ADD_SENTENCE = 'end/END_ADD_SENTENCE';
const END_REMOVE_SENTENCE = 'end/END_REMOVE_SENTENCE';
const END_UPDATE_SENTENCE = 'end/END_UPDATE_SENTENCE';
const END_MOVE_SENTENCE = 'end/END_MOVE_SENTENCE';

export type AddSentenceAction = { +type: 'end/END_ADD_SENTENCE', sentence: Sentence };
export type RemoveSentenceAction = { +type: 'end/END_REMOVE_SENTENCE', sentence: Sentence };
export type UpdateSentenceAction = { +type: 'end/END_UPDATE_SENTENCE', oldSentence: Sentence, newSentence: Sentence };
export type MoveSentencesAction = { +type: 'end/END_MOVE_SENTENCE', sentence: Sentence, oldPosition: number, newPosition: number };

export type EndActions = AddSentenceAction
                            | RemoveSentenceAction
                            | UpdateSentenceAction
                            | MoveSentencesAction;


export {
    END_ADD_SENTENCE,
    END_REMOVE_SENTENCE,
    END_UPDATE_SENTENCE,
    END_MOVE_SENTENCE,
};
