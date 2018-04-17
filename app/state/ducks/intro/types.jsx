// @flow

import { Sentence } from 'data';

const INTRO_ADD_SENTENCE = 'intro/INTRO_ADD_SENTENCE';
const INTRO_REMOVE_SENTENCE = 'intro/INTRO_REMOVE_SENTENCE';
const INTRO_UPDATE_SENTENCE = 'intro/INTRO_UPDATE_SENTENCE';
const INTRO_MOVE_SENTENCE = 'intro/INTRO_MOVE_SENTENCE';

export type AddSentenceAction = { +type: 'intro/INTRO_ADD_SENTENCE', sentence: Sentence };
export type RemoveSentenceAction = { +type: 'intro/INTRO_REMOVE_SENTENCE', sentence: Sentence };
export type UpdateSentenceAction = { +type: 'intro/INTRO_UPDATE_SENTENCE', oldSentence: Sentence, newSentence: Sentence };
export type MoveSentencesAction = { +type: 'intro/INTRO_MOVE_SENTENCE', sentence: Sentence, oldPosition: number, newPosition: number };

export type IntroActions = AddSentenceAction
                            | RemoveSentenceAction
                            | UpdateSentenceAction
                            | MoveSentencesAction;


export {
    INTRO_ADD_SENTENCE,
    INTRO_REMOVE_SENTENCE,
    INTRO_UPDATE_SENTENCE,
    INTRO_MOVE_SENTENCE,
};
