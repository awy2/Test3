// @flow
import { keyword } from 'data';



const KEYWORD_GET = 'keyword/GET';
const KEYWORD_ADD = 'keyword/ADD';
const KEYWORD_DELETE = 'keyword/DELETE';
const KEYWORD_UPDATE = 'keyword/UPDATE';

export type KeywordGetAction = { type: 'keyword/GET', keywords: Array<keyword> };
export type KeywordAddAction = { type: 'keyword/ADD', keyword: keyword };
export type KeywordDeleteAction = { type: 'keyword/DELETE', keyword: keyword };
export type KeywordUpdateAction = { type: 'keyword/UPDATE', keyword: keyword };

export type KeywordActions =  KeywordGetAction
                            | KeywordAddAction
                            | KeywordDeleteAction
                            | KeywordUpdateAction;

export {
    KEYWORD_GET,
    KEYWORD_ADD,
    KEYWORD_DELETE,
    KEYWORD_UPDATE,
};
