// @flow

import { Sentence } from 'data';
import { arrayMove } from 'util';

import * as types from './types';


export type IntroState = {
    intro: Array<Sentence>,
    company: string,
    position: string,
};

const initialState: IntroState = {
    intro: [],
    company: '',
    position: '',
};


// TODO: instead of doing "action: Object" I want to make it type.IntroActions
// However flow type is annoying when it come to "disjoint unions". If I make the switch block into an "if else" block
// I can use an tempt object to access "newSentence", but otherwise flow is giving me errors
export default function reducers(state: IntroState = initialState, action: Object) : IntroState {
    let newSentence = null;

    switch (action.type) {
    case types.INTRO_ADD_SENTENCE:
        newSentence = action.sentence;
        return {
            ...state,
            intro: [...state.intro, newSentence],
        };
    case types.INTRO_REMOVE_SENTENCE:

        return {
            ...state,
            intro: state.intro.filter(introSentence => introSentence.id !== action.sentence.id),
        };
    case types.INTRO_UPDATE_SENTENCE:
        // TODO test this
        return {
            ...state,
            intro: state.intro.map((introSentence) => { return introSentence === action.oldSentence ? action.newSentence : introSentence; }),
        };
    case types.INTRO_MOVE_SENTENCE:
        return {
            ...state,
            intro: arrayMove(state.intro, action.oldPosition, action.newPosition),
        };
    default:
        return state;
    }
}
