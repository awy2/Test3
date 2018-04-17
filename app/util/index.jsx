// @flow

import { keyword } from 'data';

export const arrayMove = (arr: Array<any>, oldIndex: number, newIndex: number) => {
    if (Array.isArray(arr) === false) {
        return arr;
    }
    const copyArr = arr.slice();

    const difference = newIndex - oldIndex;
    const value = copyArr.splice(oldIndex, 1)[0];
    const before = copyArr.splice(0, oldIndex + difference);
    const after = copyArr.splice(0, copyArr.length);

    return [
        ...before,
        value,
        ...after,
    ];
};


export const getUsedKeywords = (keywords: Array<keyword>, description: string) :Array<keyword> => {
    const usedKeywords = [];

    if (Array.isArray(keywords) === false
        || !description
        || !description.length) {
        return usedKeywords;
    }

    const keywordSelector = keywords.map(keywordObj => keywordObj.keyword || '');

    const regexSearchString = keywordSelector.join('|').replace(/[-[\]/{}()*+?.\\^$]/g, '\\$&');
    const regexFromMyArray = new RegExp(`(${regexSearchString})`, 'gi'); // TODO maybe try "//s()//s"

    let execution;

    // eslint-disable-next-line no-cond-assign
    while ((execution = regexFromMyArray.exec(description)) !== null) {
        const match = execution[0];
        const matchingKeywords = keywords.filter(keywordObj => keywordObj.keyword.toLocaleLowerCase() === match.toLocaleLowerCase());
        if (matchingKeywords.length) {
            usedKeywords.push(matchingKeywords[0]);
        }
    }

    return usedKeywords;
};


export const checkSentenceEnding = (newSentence: string): string => {
    let updatedSentence: string = '';

    if (typeof (newSentence) === 'string') {
        updatedSentence = newSentence.trim();
        updatedSentence = updatedSentence.endsWith('.') ? `${updatedSentence} ` : `${updatedSentence}. `;
    }

    return updatedSentence;
};
