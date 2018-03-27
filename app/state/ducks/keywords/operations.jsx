// @flow

import PouchDB from 'pouchdb';
import PouchFind from 'pouchdb-find';
import type { Dispatch } from 'redux';
import { keyword } from 'data';
//import { keywordGet, keywordAdd }  from './actions';
import * as action from './actions';

import type {
    KeywordActions,
    KeywordGetAction,
    KeywordAddAction,
    KeywordDeleteAction,
    KeywordUpdateAction,
} from './types';

PouchDB.plugin(PouchFind);

const database = "http://localhost:5984/test";

const keywordsGet = (dispatch : Dispatch<KeywordActions>) : ?KeywordGetAction => {
    const db = new PouchDB(database);

    db.find({
        selector: {keyword: {$gt: null}},
    })
    .then((result) => {
        let keywordsResults : Array<keyword> = result.docs;

        dispatch(action.keywordGet(keywordsResults));
    })
    .catch((err) => {
        console.log(err);
    });
}

const keywordInsert = (newKeyword : keyword) => {
  
    return (dispatch : Dispatch<KeywordActions> ) : ?KeywordAddAction  => {
        const db = new PouchDB(database);

        db.put(newKeyword)
        .then(() => {
            dispatch(action.keywordAdd(newKeyword));
        })
        .catch((err) => {
            console.log(err);
        });
    }
};

const keywordRemove = (deletedKeyword : keyword) => {

    return (dispatch : Dispatch<KeywordActions> ) : ?KeywordDeleteAction  => {
        const db = new PouchDB(database);

        // eslint-disable-next-line no-underscore-dangle
        db.get(deletedKeyword._id).then((doc) => {
            debugger
            db.remove(doc).then(() => {
                debugger
                dispatch(action.keywordDelete(deletedKeyword));
            }).catch((err) => {
                debugger
                console.log(err);
            });
        }).catch((err) => {
            debugger
            console.log(err);
        });
    }
};


const keywordUpdate = (updateKeyword : keyword) => {

    return (dispatch : Dispatch<KeywordActions> ) : ?KeywordUpdateAction  => {
        const db = new PouchDB(database);

       // eslint-disable-next-line no-underscore-dangle
       db.get(updateKeyword._id)
       .then((doc) => {
               // eslint-disable-next-line no-underscore-dangle
           db.put(Object.assign({}, updateKeyword, {_rev: doc._rev}))
           .then(() => {
               dispatch(action.keywordUpdate(updateKeyword));
           }).catch((err) => {
               console.log(err);
           });
       }).catch((err) => {
           console.log(err);
       });
    }
};

export {
    keywordsGet,
    keywordInsert,
    keywordRemove,
    keywordUpdate,
};
