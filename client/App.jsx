// React
import React from 'react';
import ReactDOM from 'react-dom';
// AppContainer
import { AppContainer } from 'react-hot-loader';
// Router
import Router from './app/components/router/Router';
// Tap Event
import injectTapEventPlugin from 'react-tap-event-plugin';
// Stylesheets
import './styles/main.scss';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

ReactDOM.render(
    <AppContainer>
        <Router/>
    </AppContainer>,
    document.getElementById('client')
);

if (module.hot) {
    module.hot.accept('./app/components/router/Router', () => {
        const NewRouter = require('./app/components/router/Router').default;
        ReactDOM.render(
            <AppContainer>
                <NewRouter/>
            </AppContainer>,
            document.getElementById('client')
        )
    })
}
