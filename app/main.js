import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import configureStore from './state/configureStore';

import Root from './config/Root';


const muiTheme = getMuiTheme({
    palette: {
        accent1Color: 'red',
    },
});


const store = configureStore();

const render = (Component) => {
    ReactDOM.render(

        <Provider store={store} key="provider">
            <AppContainer>
                <MuiThemeProvider theme={muiTheme}>
                    <Component />
                </MuiThemeProvider>
            </AppContainer>
        </Provider>,
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
