// @flow

import React, { Component } from 'react';
import jsPDF from 'jspdf';
import FlatButton from 'material-ui/FlatButton/FlatButton';
import Paper from 'material-ui/Paper/Paper';

import { ExampleButton } from 'components';
import CoverLetter from './CoverLetter';

type Props = {
};

class OutputControl extends Component<Props> {
    onPrintPDF = () => {
        // eslint-disable-next-line new-cap
        const doc = new jsPDF();
        const source = document.getElementById('cover-letter');
        const specialElementHandlers = {
            // eslint-disable-next-line func-names
            '#cover-letter': function() { // element, renderer
                return true;
            },
        };

        doc.fromHTML(
            source, 15, 15,
            {
                elementHandlers: specialElementHandlers,
            },
        );
        doc.save('Test.pdf');
    };

    render() {
        return (
            <div className="output-controls">
                <Paper zDepth={4}>
                    <CoverLetter />
                </Paper>
                <FlatButton label="Print PDF" onClick={this.onPrintPDF} className="print-pdf-button" />
                <ExampleButton />
            </div>
        );
    }
}

export default OutputControl;
