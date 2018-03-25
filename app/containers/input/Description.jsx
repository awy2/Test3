import React, { Component } from 'react';
import { connect } from 'react-redux';
import get from 'lodash/get';

import { postingOperations } from 'postingOperations';

class Description extends Component {
    onDescriptionChange = (event) => {
        const { dispatch } = this.props;
        dispatch(postingOperations.descriptionChange(event.target.value));
    }

    getHighlights() {
        const CLOSE_MARK = `</${this.props.wrapIn}>`;

        // escape HTML
        let highlightedMarkup = this.props.description.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');

        const payload = this.doHighlight(highlightedMarkup);

        if (payload) {
            switch (payload.constructor.name) {
            case 'Array':
                highlightedMarkup = this.handleArrayHighlight(highlightedMarkup, payload);
                break;
            default:
                throw new TypeError('props.highlight did not return RegExp or Array');
            }
        }

        // this keeps scrolling aligned when input ends with a newline
        highlightedMarkup = highlightedMarkup.replace(new RegExp(`\\n(${CLOSE_MARK})?$`), '\n\n$1');

        return highlightedMarkup;
    }

    testMatch = values => (values ? values.includes('a') : false);

    stringToIndexedWords = (string) => {
        const result = [];
        const hasWord = /([a-zA-Z']+)/g;
        let execution;
        // eslint-disable-next-line no-cond-assign
        while ((execution = hasWord.exec(string)) != null) {
            const match = execution[1];
            result.push([execution.index, execution.index + match.length, match]);
        }
        return result;
    }

    doHighlight = (input) => {
        const wordsVec = this.stringToIndexedWords(input);
        return wordsVec.map(([start, end, word]) => {
            if (this.testMatch(word)) { return [start, end, 'keyword']; }
            return [start, end];
        });
    }


    handleArrayHighlight(input, payload) {
        let offset = 0;
        const wrapIn = 'mark';
        const OPEN_MARK = `<${wrapIn}>`;
        const CLOSE_MARK = `</${wrapIn}>`;

        payload.forEach((element) => {
            // insert open tag
            const open = element[0] + offset;

            if (element[2]) {
                const OPEN_MARK_WITH_CLASS = `<${wrapIn} class=${element[2]}>`;
                // eslint-disable-next-line no-param-reassign
                input = input.slice(0, open) + OPEN_MARK_WITH_CLASS + input.slice(open);
                offset += OPEN_MARK_WITH_CLASS.length;
            } else {
                // eslint-disable-next-line no-param-reassign
                input = input.slice(0, open) + OPEN_MARK + input.slice(open);
                offset += OPEN_MARK.length;
            }

            // insert close tag
            const close = element[1] + offset;

            // eslint-disable-next-line no-param-reassign
            input = input.slice(0, close) + CLOSE_MARK + input.slice(close);
            offset += CLOSE_MARK.length;
        }, this);
        return input;
    }

    render() {
        const descriptionText = get(this, 'props.description', '');

        return (
            <div className="description-container">
                <div className="rth-backdrop" ref={backdrop => this.backdrop = backdrop}>
                    <div
                        className="rth-highlights rth-content"
                        dangerouslySetInnerHTML={{ __html: this.getHighlights() }}
                    />
                </div>
                <textarea className="rth-input rth-content" value={descriptionText} onChange={this.onDescriptionChange} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { description } = state.posting;

    return {
        description,
    };
};

export default connect(mapStateToProps)(Description);
