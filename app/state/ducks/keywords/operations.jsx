// @flow

import PouchDB from 'pouchdb';
import PouchFind from 'pouchdb-find';
import type { Dispatch } from 'redux';
import { keyword } from 'data';

import * as showNotificationOperations from 'notification/operations';
import type { NotificationAction } from 'notification/types';
import * as action from './actions';

import type {
    KeywordActions,
    KeywordGetAction,
    KeywordAddAction,
    KeywordDeleteAction,
    KeywordUpdateAction,
} from './types';

PouchDB.plugin(PouchFind);

const databaseName : string = 'http://localhost:5984/test'; // 'offline';
const PouchInstance = new PouchDB(databaseName);


const keywordsGet = () => {
    return (dispatch : Dispatch<KeywordActions>) : ?KeywordGetAction => {
        PouchInstance.find({
            selector: { keyword: { $gt: null } },
        })
            .then((result) => {
                const keywordsResults : Array<keyword> = result.docs;

                dispatch(action.keywordGet(keywordsResults));
            })
            .catch((err) => {
                console.log(err);
            });
    };
};

const keywordInsert = (newKeyword : keyword) => {
    return (dispatch : Dispatch<KeywordActions>) : ?KeywordAddAction => {
        PouchInstance.put(newKeyword)
            .then(() => {
                dispatch(action.keywordAdd(newKeyword));
            })
            .catch((err) => {
                console.log(err);
            });
    };
};

const keywordRemove = (deletedKeyword : keyword) => {
    return (dispatch : Dispatch<KeywordActions>) : ?KeywordDeleteAction => {
        // eslint-disable-next-line no-underscore-dangle
        PouchInstance.get(deletedKeyword._id).then((doc) => {
            PouchInstance.remove(doc).then(() => {
                dispatch(action.keywordDelete(deletedKeyword));
            }).catch((err) => {
                console.log(err);
            });
        }).catch((err) => {
            console.log(err);
        });
    };
};

const keywordUpdate = (updateKeyword : keyword) => {
    return (dispatch : Dispatch<KeywordActions | NotificationAction>) : ?KeywordUpdateAction => {
        // eslint-disable-next-line no-underscore-dangle
        PouchInstance.get(updateKeyword._id)
            .then((doc) => {
                // eslint-disable-next-line no-underscore-dangle
                PouchInstance.put(Object.assign({}, updateKeyword, { _rev: doc._rev }))
                    .then(() => {
                        dispatch(action.keywordUpdate(updateKeyword));
                        dispatch(showNotificationOperations.showNotificationMessage(`Keyword "${updateKeyword.keyword}" has been updated`));
                    }).catch((err) => {
                        console.log(err);
                    });
            }).catch((err) => {
                console.log(err);
            });
    };
};

export {
    keywordsGet,
    keywordInsert,
    keywordRemove,
    keywordUpdate,
};
