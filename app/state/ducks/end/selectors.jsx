// @flow

import { Sentence } from 'data';
import type { EndState } from './reducers';

type GlobalState = {
    end: EndState;
};

function getEnd(state: GlobalState): Array<Sentence> {
    return state.end.end;
}


export {
    getEnd,
};
