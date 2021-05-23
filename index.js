// import 'react-hot-loader/patch';

import React from 'react';
import ReactDOM from 'react-dom';

// import { AppContainer } from 'react-hot-loader';

import App from "./src/app";

const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.getElementById('root')
    );
}

const renderWithoutReactHot = Component => {
    ReactDOM.render(
        <Component />,
        document.getElementById('root')
    );
}

renderWithoutReactHot(App);

if (module.hot) {
    module.hot.accept('./src/app.js', function () {
        const NextApp = require('./src/app.js').default;
        renderWithoutReactHot(NextApp);
    })
}