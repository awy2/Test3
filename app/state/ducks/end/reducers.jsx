// @flow

import { Sentence } from 'data';
import { arrayMove } from 'util';

import * as types from './types';


export type EndState = {
    end: Array<Sentence>,
    company: string,
    position: string,
};

const initialState: EndState = {
    end: [],
    company: '',
    position: '',
};


// TODO: instead of doing "action: Object" I want to make it type.EndActions
// However flow type is annoying when it come to "disjoint unions". If I make the switch block into an "if else" block
// I can use an tempt object to access "newSentence", but otherwise flow is giving me errors
export default function reducers(state: EndState = initialState, action: Object) : EndState {
    let newSentence = null;

    switch (action.type) {
    case types.END_ADD_SENTENCE:
        newSentence = action.sentence;
        return {
            ...state,
            end: [...state.end, newSentence],
        };
    case types.END_REMOVE_SENTENCE:

        return {
            ...state,
            end: state.end.filter(endSentence => endSentence.id !== action.sentence.id),
        };
    case types.END_UPDATE_SENTENCE:
        // TODO test this
        return {
            ...state,
            end: state.end.map((endSentence) => { return endSentence === action.oldSentence ? action.newSentence : endSentence; }),
        };
    case types.END_MOVE_SENTENCE:
        return {
            ...state,
            end: arrayMove(state.end, action.oldPosition, action.newPosition),
        };
    default:
        return state;
    }
}
