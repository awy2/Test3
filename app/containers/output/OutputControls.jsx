// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';

import jsPDF from 'jspdf';
import FlatButton from 'material-ui/FlatButton/FlatButton';

import { ExampleButton } from 'components';
import CoverLetter from './CoverLetter';

type Props = {
};

class OutputControl extends Component<Props> {
    onPrintPDF = () => {
        // eslint-disable-next-line new-cap
        const doc = new jsPDF();
        const source = document.getElementById('coverLetter');
        const specialElementHandlers = {
            // eslint-disable-next-line func-names
            '#myId': function() { // element, renderer
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
                <CoverLetter />
                <FlatButton label="Print PDF" onClick={this.onPrintPDF} className="print-pdf-button" />
                <ExampleButton />
            </div>
        );
    }
}

export default OutputControl;
