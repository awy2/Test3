import React, { Component } from 'react';

import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';

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
          <Tab label="Address" value={0} />
          <Tab label="Description" value={1} />
          <Tab label="Key Words" value={2} />
        </Tabs>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
        >
          <div>
            Swipe to see the next slide.<br />
          </div>
          <div>
            slide n°2
          </div>
          <div >
            slide n°3
          </div>
        </SwipeableViews>
        </div>
      )
    }
  }