// @flow

import get from 'lodash/get';
import { keyword } from 'data';
import * as types from './types';

export type KeywordState = {
    +keywords: Array<keyword>;
};

const initialState: KeywordState = {
    keywords: [
        {
            keyword: 'javascript',
            descriptions: ['I can use javascript', 'I am ok with javascript'],
        },
        {
            keyword: 'c#',
            descriptions: ['I can use c#', 'I am ok with c#'],
        },
    ]
};

export default function reducers(state: KeywordState = initialState, action: types.KeywordActions) : KeywordState {
    let keywordParam :keyword = null;

    switch (action.type) {
    case types.KEYWORD_GET:
        return {
            ...state,
            keywords: get(action, 'keywords', state.keywords),
        };
    case types.KEYWORD_ADD:
        return { 
            ...state,
            keywords: [...state.keywords, action.keyword],
        };
    case types.KEYWORD_DELETE:
        keywordParam = action.keyword;

        return { 
            ...state,
            // eslint-disable-next-line no-underscore-dangle
            keywords: state.keywords.filter(keywordObj => keywordObj._id !== keywordParam._id ),
        };
    case types.KEYWORD_UPDATE:
        keywordParam = action.keyword;

        return { 
            ...state,
            // eslint-disable-next-line no-underscore-dangle
            keywords: state.keywords.map((keywordObj) => { return keywordObj._id === keywordParam._id ? keywordParam : keywordObj }),
        };
    default:
        return state;
    }
}
