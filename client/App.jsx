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

/**
 * Warning from React Router, caused by react-hot-loader.
 * The warning can be safely ignored, so filter it from the console.
 * Otherwise you'll see it every time something changes.
 * See https://github.com/gaearon/react-hot-loader/issues/298
 */
if (module.hot) {
  const isString = (val) => {
      if (typeof val === 'string' || val instanceof String) {
        return true;
      } else {
        return false;
      }
  }
  const orgError = console.error; // eslint-disable-line no-console
  console.error = (...args) => { // eslint-disable-line no-console
    if (args && args.length === 1 && isString(args[0]) && args[0].indexOf('You cannot change <Router routes>;') > -1) {
      // React route changed
    } else {
      // Log the error as normally
      orgError.apply(console, args);
    }
  };
}
