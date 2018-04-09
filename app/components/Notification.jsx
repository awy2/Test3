// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import type { Dispatch } from 'redux';
import Snackbar from 'material-ui/Snackbar/Snackbar';

import { notificationOperations, notificationSelectors, NotificationAction } from 'notification';

type Props = {
    message: ?string,
    duration: ?number,
    callback: ?Function,
    clearNotification: Function,
};

type State = {
    open: boolean,
};

class Notification extends Component<Props, State> {
    state = {
        open: false,
    };

    componentWillReceiveProps = (props: Props) => {
        if (props.message) {
            this.setState({ open: true });
        }
    }

    handleRequestClose = () => {
        const { callback, clearNotification  } = this.props;

        this.setState({
            open: false,
        });

        if (callback) {
            callback();
        }

        clearNotification();
    };

    render() {
        let { message: notificationMessage = '', duration: notificationDuration = 0 } = this.props;
        notificationMessage = notificationMessage || '';
        notificationDuration = notificationDuration || 0;

        return (
            <div>
                <Snackbar
                    open={this.state.open}
                    message={notificationMessage}
                    autoHideDuration={notificationDuration}
                    onRequestClose={this.handleRequestClose}
                />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch: Dispatch<NotificationAction>) => {
    return bindActionCreators({
        clearNotification: notificationOperations.clearNotification,
    }, dispatch);
};

const mapStateToProps = (state) => {
    return {
        message: notificationSelectors.getNotificationMessage(state),
        duration: notificationSelectors.getNotificationDuration(state),
        callback: notificationSelectors.getNotificationCallback(state),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
