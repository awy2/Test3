// @flow
/*
import React, { Component } from 'react';
import Divider from 'material-ui/Divider/Divider';
import Paper from 'material-ui/Paper/Paper';
import TextField from 'material-ui/TextField/TextField';
import ChipInput from 'material-ui-chip-input/lib/ChipInput';
import Chip from 'material-ui/Chip/Chip'

type Props = {

};

type State = {
    KS: any,
};

export default class KeywordSentenceEditor extends Component<Props, State> {
    state = {
        KS: '',
    }

    onNewKeywordChange = (event: Event) => {
        const { target = null } = event;
        debugger
        if (target instanceof HTMLInputElement) {
            this.setState({ KS: target.value });
        }
    }

    chipRenderertest = (a, c, b) => {
        debugger
        return ( <Chip key={a.chip} >
            {a.chip}
        </Chip>);
    }

    render() {

        //    dataSource={['company']} 
        //  chipRenderer={this.chipRenderertest}
        return (
            <div>
                <ChipInput
                  
                    onBlur={this.onNewKeywordChange}
                    fullWidth
                    value={['sdf']}
                />
            </div>
        );
    }
}
*/