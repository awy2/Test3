import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
// import { Provider } from 'react-redux';

// import configureStore from './reducers/configureStore';

import Root from './config/Root';


// const store = configureStore();
//    <Provider store={store} key="provider"></Provider>
const render = (Component) => {
  ReactDOM.render(

    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root'),
  );
};

render(Root);

if (module.hot) {
  module.hot.accept('./config/Root', () => {
    const newApp = require('./config/Root').default;
    render(newApp);
  });
}
