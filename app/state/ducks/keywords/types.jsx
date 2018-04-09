// @flow
import { keyword } from 'data';

const KEYWORD_GET = 'keyword/KEYWORD_GET';
const KEYWORD_ADD = 'keyword/KEYWORD_ADD';
const KEYWORD_DELETE = 'keyword/KEYWORD_DELETE';
const KEYWORD_UPDATE = 'keyword/KEYWORD_UPDATE';
/*
const INTRO_KEYWORD_GET = 'keyword/INTRO_KEYWORD_GET';
const INTRO_KEYWORD_ADD = 'keyword/INTRO_KEYWORD_ADD';
const INTRO_KEYWORD_DELETE = 'keyword/INTRO_KEYWORD_DELETE';
const INTRO_KEYWORD_UPDATE = 'keyword/INTRO_KEYWORD_UPDATE';
*/

export type KeywordGetAction = { type: 'keyword/KEYWORD_GET', keywords: Array<keyword> };
export type KeywordAddAction = { type: 'keyword/KEYWORD_ADD', keyword: keyword };
export type KeywordDeleteAction = { type: 'keyword/KEYWORD_DELETE', keyword: keyword };
export type KeywordUpdateAction = { type: 'keyword/KEYWORD_UPDATE', keyword: keyword };
/*
export type IntroKeywordGetAction = { type: 'keyword/INTRO_KEYWORD_GET', keywords: Array<introKeyword> };
export type IntroKeywordAddAction = { type: 'keyword/INTRO_KEYWORD_ADD', keyword: introKeyword };
export type IntroKeywordDeleteAction = { type: 'keyword/INTRO_KEYWORD_DELETE', keyword: introKeyword };
export type IntroKeywordUpdateAction = { type: 'keyword/INTRO_KEYWORD_UPDATE', keyword: introKeyword };
*/
export type KeywordActions = KeywordGetAction
                            | KeywordAddAction
                            | KeywordDeleteAction
                            | KeywordUpdateAction;
                            /*
                            | IntroKeywordGetAction
                            | IntroKeywordAddAction
                            | IntroKeywordDeleteAction
                            | IntroKeywordUpdateAction;

    INTRO_KEYWORD_GET,
    INTRO_KEYWORD_ADD,
    INTRO_KEYWORD_DELETE,
    INTRO_KEYWORD_UPDATE,
*/

export {
    KEYWORD_GET,
    KEYWORD_ADD,
    KEYWORD_DELETE,
    KEYWORD_UPDATE,
};
