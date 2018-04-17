// @flow

export const introKeyword = 'introKeyword';
export const bodyKeyword = 'bodyKeyword';
export const endKeyword = 'endKeyword';

export type keyword = {
    _id: string,
    _rev: string,
    keyword: string,
    descriptions: Array<string>,
};
