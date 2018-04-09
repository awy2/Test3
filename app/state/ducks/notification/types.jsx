// @flow

export type notificationMessage = {
    message: string,
    duration: ?number,
};

export type notificationWarning = {
    message: string,
    callBack: Function,
};

export type notificationError = {
    message: string,
    duration: ?number,
};

export type notification = notificationMessage
                            | notificationWarning
                            | notificationError;


const NOTIFICATION_SHOW_MESSAGE = 'notification/NOTIFICATION_SHOW_MESSAGE';
const NOTIFICATION_SHOW_WARNING = 'notification/NOTIFICATION_SHOW_WARNING';
const NOTIFICATION_SHOW_ERROR = 'notification/NOTIFICATION_SHOW_ERROR';
const NOTIFICATION_CLEAR = 'notification/NOTIFICATION_CLEAR';


export type NotificationShowMessageAction = { type: 'notification/NOTIFICATION_SHOW_MESSAGE', notification: notificationMessage };
export type NotificationShowWarningAction = { type: 'notification/NOTIFICATION_SHOW_WARNING', notification: notificationWarning };
export type NotificationShowErrorAction = { type: 'notification/NOTIFICATION_SHOW_ERROR', notification: notificationError };
export type NotificationClearAction = { type: 'notification/NOTIFICATION_CLEAR' };

export type NotificationAction = NotificationShowMessageAction
                            | NotificationShowWarningAction
                            | NotificationShowErrorAction
                            | NotificationClearAction;

export {
    NOTIFICATION_SHOW_MESSAGE,
    NOTIFICATION_SHOW_WARNING,
    NOTIFICATION_SHOW_ERROR,
    NOTIFICATION_CLEAR,
};
