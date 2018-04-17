// @flow

import uuidv4 from 'uuid/v4';
import { sentence } from 'data';

// TODO: Map doesn't work well with flow
const specialWordsIdentifier :Object = new Map();
specialWordsIdentifier.set('position', '*position*');
specialWordsIdentifier.set('company', '*company*');
specialWordsIdentifier.set('address', '*address*');
specialWordsIdentifier.set('zipCode', '*zipCode*');
specialWordsIdentifier.set('firstName', '*firstName*');
specialWordsIdentifier.set('lastName', '*lastName*');
specialWordsIdentifier.set('city', '*city*');

export {
    specialWordsIdentifier,
};

export class Sentence {
    value: string;
    title: string;
    id: string;

    constructor(obj: sentence) {
        this.value = obj.value;
        this.title = obj.title;
        this.id = uuidv4();
    }
}
