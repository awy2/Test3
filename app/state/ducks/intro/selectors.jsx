// @flow

import { sentence, Sentence } from 'data';
import type { IntroState } from './reducers';

type GlobalState = {
    intro: IntroState;
};

function getIntro(state: GlobalState): Array<Sentence> {
    return state.intro.intro;
}


export {
    getIntro,
};
