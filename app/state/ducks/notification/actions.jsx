// @flow

import * as types from './types';

const showNotificationMessage = (notification: types.notificationMessage) : types.NotificationShowMessageAction => {
    return {
        type: types.NOTIFICATION_SHOW_MESSAGE,
        notification,
    };
};

const showNotificationWarning = (notification: types.notificationWarning) : types.NotificationShowWarningAction => {
    return {
        type: types.NOTIFICATION_SHOW_WARNING,
        notification,
    };
};

const showNotificationError = (notification: types.notificationError) : types.NotificationShowErrorAction => {
    return {
        type: types.NOTIFICATION_SHOW_ERROR,
        notification,
    };
};

const clearNotification = () : types.NotificationClearAction => {
    return {
        type: types.NOTIFICATION_CLEAR,
    };
};

export {
    showNotificationMessage,
    showNotificationWarning,
    showNotificationError,
    clearNotification,
};

