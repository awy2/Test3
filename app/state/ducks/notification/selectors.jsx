// @flow

// import type { notificationMessage } from './types';
// import type { NotificationState } from './reducers';

function getNotificationMessage(state: Object): ?string {
    return state.notification.message;
}

function getNotificationDuration(state: Object): ?number {
    return state.notification.duration;
}

function getNotificationCallback(state: Object): ?Function {
    return state.notification.callback;
}

export {
    getNotificationMessage,
    getNotificationDuration,
    getNotificationCallback,
};
