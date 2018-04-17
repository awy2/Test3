// @flow

import { Sentence } from 'data';
import { arrayMove } from 'util';

import * as types from './types';


export type BodyState = {
    body: Array<Sentence>,
    company: string,
    position: string,
};

const initialState: BodyState = {
    body: [],
    company: '',
    position: '',
};

// TODO: instead of doing "action: Object" I want to make it type.BodyActions
// However flow type is annoying when it come to "disjoint unions". If I make the switch block into an "if else" block
// I can use an tempt object to access "newSentence", but otherwise flow is giving me errors
export default function reducers(state: BodyState = initialState, action: Object) : BodyState {
    let newSentence = null;

    switch (action.type) {
    case types.BODY_ADD_SENTENCE:
        newSentence = action.sentence;
        return {
            ...state,
            body: [...state.body, newSentence],
        };
    case types.BODY_REMOVE_SENTENCE:

        return {
            ...state,
            body: state.body.filter(bodySentence => bodySentence.id !== action.sentence.id),
        };
    case types.BODY_UPDATE_SENTENCE:
        // TODO test this
        return {
            ...state,
            body: state.body.map((bodySentence) => { return bodySentence === action.oldSentence ? action.newSentence : bodySentence; }),
        };
    case types.BODY_MOVE_SENTENCE:
        return {
            ...state,
            body: arrayMove(state.body, action.oldPosition, action.newPosition),
        };
    default:
        return state;
    }
}
