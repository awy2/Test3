// @flow

import { Sentence } from 'data';
import type { BodyState } from './reducers';

type GlobalState = {
    body: BodyState;
};

function getBody(state: GlobalState): Array<Sentence> {
    return state.body.body;
}


export {
    getBody,
};
