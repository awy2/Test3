// @flow

import * as React from 'react';
import { connect } from 'react-redux';

import { keyword } from 'data';
import { postingOperations, postingSelectors } from 'posting';
import { keywordsSelectors } from 'keywords';

type Props = {
    description: string,
    //wrapIn: string,
    keywords: Array<keyword>,
    onChangeEvent: Function,
};

type State = {
    highligthScroll: number;
};

class Description extends React.Component<Props, State> {

    constructor(props) {
        super(props);
        // eslint-disable-next-line no-underscore-dangle
        
        this.state = {
            highligthScroll: 0,
        };
    }

    getHighlights() {
        //const CLOSE_MARK = `</${this.props.wrapIn}>`;

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
        //highlightedMarkup = highlightedMarkup.replace(new RegExp(`\\n(${CLOSE_MARK})?$`), '\n\n$1');

        return highlightedMarkup;
    }


    getIndexString = (func: Function, resultArray: Array<any>, stringToParse: string) => {

        let execution = func.exec(stringToParse);

        if (execution !== null){
            let match = execution[0];
            resultArray.push([execution.index, execution.index + match.length, match]);
            return this.getIndexString(func, resultArray, stringToParse);
        }

        return null;
    }


    stringToIndexedWords = (stringToParse: string) => {
        const result = [];
        const { keywords = [] } = this.props;

        if (keywords.length === 0) {
            return result;
        }

        const keywordsString :Array<string> = keywords.map((keywordObj) => { return keywordObj.keyword; });
    
        // TODO fix problem when words contain "|"
        const regexSearchString: string = keywordsString.join("|").replace(/[-[\]/{}()*+?.\\^$]/g, '\\$&');
        const regexFromMyArray = new RegExp(`(${regexSearchString})`, 'gi'); // TODO maybe try "//s()//s"

        // TODO replace while loop with tail recurision

        let execution;
        // eslint-disable-next-line no-cond-assign
        while ((execution = regexFromMyArray.exec(stringToParse)) != null) {
            let match = execution[0];
            result.push([execution.index, execution.index + match.length, match]);
        }
        

        return result;
    }

    
    doHighlight = (input) => {
        const wordsVec = this.stringToIndexedWords(input);
        return wordsVec.map(([start, end, word]) => {
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

    handleScroll = (event) => {
        const { scrollTop } = event.target;
        this.setState({ highligthScroll: scrollTop });
    }

    render() :any {
        const { description: descriptionText = '' } = this.props;
            //   <label>Description</label>
        /* eslint-disable no-return-assign */
        /* eslint-disable react/no-danger */
        return (
            <React.Fragment>
                <span className="descirption-label" >Description</span>
                <div className="description-container">
                    <div className="rth-backdrop" style={{ top: -this.state.highligthScroll }} >
                        <div
                            className="rth-highlights rth-content"
                            dangerouslySetInnerHTML={{ __html: this.getHighlights() }}
                        />
                    </div>
                    <textarea className="rth-input rth-content" value={descriptionText} onChange={this.props.onChangeEvent} onScroll={this.handleScroll} />
                </div>
            </React.Fragment>
        );
        /* eslint-enable no-return-assign */
        /* eslint-enable react/no-danger */
    }
}


export default connect()(Description);
