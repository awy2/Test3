// @flow

import { keyword } from 'data';
import * as types from './types';

const keywordGet = (keywords: Array<keyword>) : types.KeywordGetAction => {
    debugger
    return {
        type: types.KEYWORD_GET,
        keywords
    };
};

const keywordAdd = (keywordObj: keyword) : types.KeywordAddAction => {
    return {
        type: types.KEYWORD_ADD,
        keyword: keywordObj,
    };
};

const keywordDelete = (keywordObj: keyword) : types.KeywordDeleteAction => {
    return {
        type: types.KEYWORD_DELETE,
        keyword: keywordObj,
    };
};

const keywordUpdate = (keywordObj: keyword) : types.KeywordUpdateAction => {
    return {
        type: types.KEYWORD_UPDATE,
        keyword: keywordObj,
    };
};

export {
    keywordGet,
    keywordAdd,
    keywordDelete,
    keywordUpdate,
};

