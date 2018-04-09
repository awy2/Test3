// @flow

import * as types from './types';

export type NotificationState = {
    notification: ?types.notification,
    message: ?string,
    duration: ?number,
    callBack: ?Function,
};

const initialState: NotificationState = {
    notification: null,
    message: null,
    duration: null,
    callBack: null,
};

export default function reducers(state: NotificationState = initialState, action: types.NotificationAction) : NotificationState {
    switch (action.type) {
    case types.NOTIFICATION_SHOW_MESSAGE:
        return {
            ...state,
            notification: action.notification,
            message: action.notification.message,
            duration: action.notification.duration,
            callBack: null,
        };
    case types.NOTIFICATION_SHOW_WARNING:
        return {
            ...state,
            notification: action.notification,
            message: action.notification.message,
            duration: Infinity,
            callBack: action.notification.callBack,
        };
    case types.NOTIFICATION_SHOW_ERROR:
        return {
            ...state,
            notification: action.notification,
            message: action.notification.message,
            duration: action.notification.duration,
            callBack: null,
        };
    case types.NOTIFICATION_CLEAR:
        return initialState;
    default:
        return state;
    }
}
