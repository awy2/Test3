// @flow

import React, { Component } from 'react';
import DropDownMenu from 'material-ui/DropDownMenu/DropDownMenu';
import MenuItem from 'material-ui/MenuItem/MenuItem';

type Props = {
    className: ?string,
    onChange: Function,
    displayName: string,
    valueField: string,
    data: Array<any>,
};

type State = {
    value: number,
};

export default class DropDown extends Component<Props, State> {
    state = { value: 0 };

    handleChange = (event :Event, index: number, value: any) => {
        const { data } = this.props;
        this.setState({ value });
        this.props.onChange(data[index]);
    };

    render() {
        return (
                <DropDownMenu value={this.state.value} onChange={this.handleChange} className={this.props.className || ''}>
                    { this.props.data.map(obj =>
                        <MenuItem key={obj[this.props.valueField]} value={obj[this.props.valueField]} primaryText={obj[this.props.displayName]} />)
                    }
                </DropDownMenu>
        );
    }
}
