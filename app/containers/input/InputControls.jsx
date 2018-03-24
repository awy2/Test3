import React, { Component } from 'react';


import { Tabs, Tab } from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';

import ContactTab from './ContactTab';
import IntroTab from './IntroTab';

export default class InputControls extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slideIndex: 0,
        };
    }

    handleChange = (value) => {
        this.setState({
            slideIndex: value,
        });
    };

    render() {
        return (
            <div className="input-controls">
                <Tabs
                    onChange={this.handleChange}
                    value={this.state.slideIndex}
                >
                    <Tab label="Contact" value={0} />
                    <Tab label="Intro" value={1} />
                    <Tab label="Body" value={2} />
                    <Tab label="End" value={3} />
                    <Tab label="Key Words" value={4} />
                </Tabs>
                <SwipeableViews
                    index={this.state.slideIndex}
                    onChangeIndex={this.handleChange}
                >
                    <div className="input-tab">
                        <ContactTab />
                    </div>
                    <div className="input-tab">
                        <IntroTab />
                    </div>
                    <div className="input-tab">
                        slide n°3
                    </div>
                    <div className="input-tab">
                        slide n°2
                    </div>
                    <div className="input-tab">
                        slide n°3
                    </div>
                </SwipeableViews>
            </div>
        );
    }
}
