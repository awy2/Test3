import React, { Component } from 'react';
import { connect } from 'react-redux';
import jsPDF from 'jspdf';
import FlatButton from 'material-ui/FlatButton';

import CoverLetter from './CoverLetter';

class OutputControl extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

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
            </div>
        );
    }
}

export default connect()(OutputControl);
