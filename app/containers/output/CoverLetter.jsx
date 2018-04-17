// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postingSelectors } from 'posting';
import { introSelectors } from 'intro';
import { bodySelectors } from 'body';
import { endSelectors } from 'end';
import { Sentence } from 'data';
import { CoverLetterSentence } from 'components';
import type { PostingDisplayField } from 'posting/types';

type Props = {
    postingField: PostingDisplayField,
    intro: Array<Sentence>,
    body: Array<Sentence>,
    end: Array<Sentence>,
};

type State = {

};

class CoverLetter extends Component<Props, State> {
    render() {
        const date = new Date();

        const {
            postingField,
            intro,
            body,
            end,
        } = this.props;

        const location = `${postingField.address}${postingField.city && postingField.address ? ', ' : ''}${postingField.city}`;

        // have to use inline stlye, because jspdf doesn't work well with sass
        return (
            <div id="cover-letter">
                <div
                    id="cover-letter-header-container"
                    style={{
                        margin: '10px',
                        borderTopLeftRadius: '10px',
                        borderTopRightRadius: '10px',
                        textAlign: 'center',
                    }}
                >
                    <div id="cover-letter-header-name-container">
                        <h1 id="cover-letter-header-name" >Andrew Yip</h1>
                    </div>
                    <div id="cover-letter-header-contact-container">
                        <ul className="cover-letter-contact-list">
                            <li>604-352-4422</li>
                            <li>Vancouver, BC</li>
                            <li>AndrewWayneYip@hotmail.com</li>
                        </ul>
                    </div>
                </div>

                <p>{ date.toDateString() }</p>

                <p>{ postingField.company }</p>
                <p>{ location }</p>
                <p>{ postingField.province }</p>
                <p>{ postingField.zipCode }</p>

                <p>{ `Dear ${postingField.lastName} ${postingField.firstName}` }</p>
                <p>
                    { intro.map(introSentence => <CoverLetterSentence key={introSentence.id} sentence={introSentence} postingField={postingField} />) }
                </p>
                <p>
                    { body.map(bodySentence => <CoverLetterSentence key={bodySentence.id} sentence={bodySentence} postingField={postingField} />) }
                </p>
                <p>
                    { end.map(endSentence => <CoverLetterSentence key={endSentence.id} sentence={endSentence} postingField={postingField} />) }
                </p>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        postingField: postingSelectors.getDisplayProps(state),
        intro: introSelectors.getIntro(state),
        body: bodySelectors.getBody(state),
        end: endSelectors.getEnd(state),
    };
};

export default connect(mapStateToProps)(CoverLetter);
