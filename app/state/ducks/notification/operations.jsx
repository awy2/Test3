// @flow

import * as types from './types';
import * as action from './actions';

const defaultCloseTime = 3000;

const showNotificationMessage = (message: string, duration: ?number): types.NotificationShowMessageAction => {
    const newNotificationMessage : types.notificationMessage = {
        message,
        duration: duration || defaultCloseTime,
    };

    return action.showNotificationMessage(newNotificationMessage);
};

const showNotificationWarning = (message: string, callBack: Function): types.NotificationShowWarningAction => {
    const newNotificationWarning : types.notificationWarning = {
        message,
        callBack,
    };

    return action.showNotificationWarning(newNotificationWarning);
};

const showNotificationError = (message: string, duration: ?number): types.NotificationShowErrorAction => {
    const newNotificationError : types.notificationError = {
        message,
        duration: duration || defaultCloseTime,
    };

    return action.showNotificationError(newNotificationError);
};

const clearNotification = (): types.NotificationClearAction => {
    return action.clearNotification();
};


export {
    showNotificationMessage,
    showNotificationWarning,
    showNotificationError,
    clearNotification,
};
