import React, { Component } from 'react';

import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';

export default class AddressInput extends Component {

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
        <div className="address-controls">

        </div>
      )
    }
  }