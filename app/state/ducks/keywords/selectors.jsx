// @flow

import type { keyword } from 'data';
import { introKeyword, bodyKeyword, endKeyword } from 'data/keyword';
import { introSelectors } from 'intro';
import { bodySelectors } from 'body';
import { endSelectors } from 'end';

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
            descriptions: introKS.descriptions.filter(description => introValue.indexOf(description) === -1),
        };
    });
}

function getUnusedBodyKeywords(state: Object): ?Array<keyword> {
    const body = bodySelectors.getBody(state);
    const bodyValue = body.map(bodySentence => bodySentence.value);

    const bodyKeywords = state.keywords.keywords.filter(keywordObj => keywordObj.keyword === bodyKeyword);

    return bodyKeywords.map((bodyKS) => {
        return {
            ...bodyKS,
            descriptions: bodyKS.descriptions.filter(description => bodyValue.indexOf(description) === -1),
        };
    });
}

function getUnusedEndKeywords(state: Object): ?Array<keyword> {
    const end = endSelectors.getEnd(state);
    const endValue = end.map(endSentence => endSentence.value);

    const endKeywords = state.keywords.keywords.filter(keywordObj => keywordObj.keyword === endKeyword);

    return endKeywords.map((endKS) => {
        return {
            ...endKS,
            descriptions: endKS.descriptions.filter(description => endValue.indexOf(description) === -1),
        };
    });
}

export {
    getKeywords,
    getOtherKeywords,
    getIntroKeywords,
    getBodyKeywords,
    getEndKeywords,
    getUnusedIntroKeywords,
    getUnusedBodyKeywords,
    getUnusedEndKeywords,
};
