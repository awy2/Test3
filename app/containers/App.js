import React from 'react';

import { Notification } from 'components';

import InputControls from './input/InputControls';
import OutputControls from './output/OutputControls';

const App = () => {
    return (
        <div className="mainBody">
            <InputControls />
            <OutputControls />
            <Notification />
        </div>
    );
};

export default App;
