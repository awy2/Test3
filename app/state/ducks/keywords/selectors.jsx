// @flow

import type { keyword } from 'data';
import { introKeyword, bodyKeyword, endKeyword } from 'data/keyword';
import { introSelectors } from 'intro';
import { sentence, Sentence } from 'data';

function getKeywords(state: Object): ?Array<keyword> {
    return state.keywords.keywords;
}

function getOtherKeywords(state: Object): ?Array<keyword> {
    return state.keywords.keywords.filter(keywordObj => keywordObj.keyword !== introKeyword
                                                        && keywordObj.keyword !== bodyKeyword
                                                        && keywordObj.keyword !== endKeyword);
}

function getIntroKeywords(state: Object): ?Array<keyword> {
    return state.keywords.keywords.filter(keywordObj => keywordObj.keyword === introKeyword);
}

function getBodyKeywords(state: Object): ?Array<keyword> {
    return state.keywords.keywords.filter(keywordObj => keywordObj.keyword === bodyKeyword);
}

function getEndKeywords(state: Object): ?Array<keyword> {
    return state.keywords.keywords.filter(keywordObj => keywordObj.keyword === endKeyword);
}

function getUnusedIntroKeywords(state: Object): ?Array<keyword> {
    const intro = introSelectors.getIntro(state);
    const introValue = intro.map(introSentence => introSentence.value);

    const introKeywords = state.keywords.keywords.filter(keywordObj => keywordObj.keyword === introKeyword);
  
    return introKeywords.map((introKS) => {
        return { 
            ...introKS,
            descriptions: introKS.descriptions.filter(description => introValue.indexOf(description) === -1 )
        }; 
    });
}


/*   
{..reest}

*/




export {
    getKeywords,
    getOtherKeywords,
    getIntroKeywords,
    getBodyKeywords,
    getEndKeywords,
    getUnusedIntroKeywords,
};
