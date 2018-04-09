// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tab from 'material-ui/Tabs/Tab';
import Tabs from 'material-ui/Tabs/Tabs';
import type { Dispatch } from 'redux';
import SwipeableViews from 'react-swipeable-views';
import Paper from 'material-ui/Paper/Paper';
import { keywordAction } from 'keywords';
import * as keywordsOperations from 'keywordsOperations';

import JobPostingTab from './JobPostingTab';
import IntroTab from './IntroTab';
import BodyTab from './BodyTab';
import KeywordsTab from './KeywordsTab';


type Props = {
    dispatch: Dispatch<keywordAction>,
 };

type State = {
    slideIndex: number,
};

class InputControls extends Component<Props, State> {
    state = {
        slideIndex: 4,
    };

    componentWillMount = () => {
        const { dispatch } = this.props;
        dispatch(keywordsOperations.keywordsGet());
    }

    handleChange = (value : number) => {
        this.setState({
            slideIndex: value,
        });
    };

    render() {
        const currentTabIndex = this.state.slideIndex;
        return (
            <div className="input-controls">
                <Paper zDepth={4}>
                    <Tabs
                        onChange={this.handleChange}
                        value={currentTabIndex}
                    >
                        <Tab label="Contact" value={0} />
                        <Tab label="Intro" value={1} />
                        <Tab label="Body" value={2} />
                        <Tab label="End" value={3} />
                        <Tab label="Key Words" value={4} />
                    </Tabs>

                    <SwipeableViews
                        index={currentTabIndex}
                        onChangeIndex={this.handleChange}
                    >
                        <div className="input-tab">
                            <JobPostingTab />
                        </div>
                        <div className="input-tab">
                            <IntroTab />
                        </div>
                        <div className="input-tab">
                            <BodyTab />
                        </div>
                        <div className="input-tab">
                            Placeholder
                        </div>
                        <div className="input-tab">
                            <KeywordsTab />
                        </div>
                    </SwipeableViews>
                </Paper>
            </div>
        );
    }
}

export default connect()(InputControls);
