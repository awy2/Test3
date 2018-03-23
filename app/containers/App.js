import React from 'react';
import img from '../assets/images/react_logo_512x512.png';

import InputControls from './input/InputControls';
import OutputControls from './output/OutputControls';

const App = () => {

  /*
       <img
        className="image"
        style={{ margin: '0.5em' }}
        height="40"
        width="40"
        src={img}
        alt="React Logo"
      />
*/
  return (
    <div className="mainBody">
        <InputControls />
        <OutputControls />
    </div>
  );
};

export default App;
