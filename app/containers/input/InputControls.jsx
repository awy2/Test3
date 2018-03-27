// @flow

import React, { Component } from 'react';
import Tab from 'material-ui/Tabs/Tab';
import Tabs from 'material-ui/Tabs/Tabs';
import SwipeableViews from 'react-swipeable-views';

import JobPostingTab from './JobPostingTab';
import IntroTab from './IntroTab';
import BodyTab from './BodyTab';
import KeywordsTab from './KeywordsTab';

type Props = { };

type State = {
    slideIndex: number,
};

export default class InputControls extends Component<Props, State> {

    state = {
        slideIndex: 4,
    };

    handleChange = (value : number) => {
        this.setState({
            slideIndex: value,
        });
    };

    render() {
        const currentTabIndex = this.state.slideIndex;
        return (
            <div className="input-controls">
        
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
            </div>
        );
    }
}
