// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postingSelectors } from 'posting';
import { introSelectors } from 'intro';
import { Sentence } from 'data';
import { CoverLetterSentence } from 'components';
import type { PostingDisplayField } from 'posting/types';

type Props = {
    postingField: PostingDisplayField,
    intro: Array<Sentence>,
};

type State = {

};

class CoverLetter extends Component<Props, State> {


    render() {
        const date = new Date();

        const {
            postingField,
            intro,
        } = this.props;

        const location = `${postingField.address}${postingField.city && postingField.address ? ', ' : ''}${postingField.city}`;

        return (
            <div id="coverLetter">
                <p>{ date.toDateString() }</p>

                <p>{ postingField.company }</p>
                <p>{ location }</p>
                <p>{ postingField.province }</p>
                <p>{ postingField.zipCode }</p>

                <p>Dear { `${postingField.lastName} ${postingField.firstName}` }</p>
                    { intro.map(introSentence => <CoverLetterSentence sentence={introSentence} postingField={postingField} />) }

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        postingField: postingSelectors.getDisplayProps(state),
        intro: introSelectors.getIntro(state),
    };
};

export default connect(mapStateToProps)(CoverLetter);
