import React, { Component } from 'react';
import { connect } from 'react-redux';
import jsPDF  from 'jspdf'
import FlatButton from 'material-ui/FlatButton';

import CoverLetter from './CoverLetter';


class OutputControl extends Component {

    constructor(props) {
        super(props);
        this.state = { 

        };
    }


    onPrintPDF = () => {
        let doc = new jsPDF();
        let source = document.getElementById('coverLetter');
        let specialElementHandlers = {
            '#myId': function(element, renderer){
                return true;
            },
        };
        
        doc.fromHTML( 
            source, 15, 15,
            {
                elementHandlers: specialElementHandlers
            }
        );
        doc.save('Test.pdf');
    }
    
    render() {

        
      return (
        <div className="output-controls">
            <CoverLetter />
            <FlatButton label="Print PDF" onClick={this.onPrintPDF} />
        </div>
    )
  }
}

export default connect()(OutputControl);