// @flow

import * as React from 'react';
import Divider from 'material-ui/Divider/Divider';
import Paper from 'material-ui/Paper/Paper';
import TextField from 'material-ui/TextField/TextField';
import RaisedButton from 'material-ui/RaisedButton/RaisedButton';
import RemoveCircle from 'material-ui/svg-icons/content/remove-circle';

type Props = {
    data: Array<string>,
    saveEvent: Function,
};

type State = {
    data: Array<string>,
};

export default class StringArrayEditor extends React.Component<Props, State> {
    state = {
        data: this.props.data || [],
    }

    componentWillReceiveProps = (props: Props) => {
        this.setState({ data: props.data });
    }

    onSaveClick = () => {
        this.props.saveEvent(this.state.data);
    }

    onDescriptionChange = (event: Event, index: number) => {
        const { target } = event;
        // eslint-disable-next-line prefer-const
        let { data } = this.state;

        if (target instanceof HTMLInputElement) {
            data[index] = target.value;
            this.setState({ data });
        }
    }

    onAddDescription = () => {
        this.setState({ data: [...this.state.data, ''] });
    }

    onRemoveDescription = (event: Event, index: number) => {
        debugger
        let { data } = this.state;
        let updatedData = data.slice(); 
        updatedData.splice(index);
        this.setState({data: updatedData});
    }

    render() :any {
        return (
            <div>
             
                    { this.state.data.map((description, index) => {
                        return (
                            // eslint-disable-next-line  react/no-array-index-key
                            <React.Fragment>
                                <TextField
                                    key={`stringArrayEditor_${index}`}
                                    hintText="Enter Description"
                                    className="string-array-editor"
                                    underlineShow={false}
                                    value={description}
                                    onChange={(event: Event) => { this.onDescriptionChange(event, index); }}
                                />

                                <RemoveCircle onClick={(event: Event)  => this.onRemoveDescription(event, index)} />
                                <Divider key={`stringArrayDivider_${index}`} />
                            </React.Fragment>

                        );
                    })
                    }
             

                <RaisedButton label="New Description" onClick={this.onAddDescription} />
                <RaisedButton label="Save" onClick={this.onSaveClick} />
            </div>
        );
    }
}
