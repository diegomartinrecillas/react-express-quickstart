// React
import React from 'react';
// React Router
import { IndexRoute, Redirect, Router, Route, browserHistory } from 'react-router'
// Material UI Theme Provider
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// My Theme
import muiTheme from 'styles/material-ui/muiTheme';
// Components
import RootComponent from '../root-component/RootComponent';
import IndexComponent from '../index-component/IndexComponent';
import ComponentA from '../component-a/ComponentA';
import ComponentB from '../component-b/ComponentB';
import NotFound from '../not-found/NotFound';

export default class App extends React.Component {
    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <Router history={browserHistory}>
                    <Route path="/" component={RootComponent} >
                        <IndexRoute component={IndexComponent} />
                        <Route path="/component-a" component={ComponentA} />
                        <Route path="/component-b" component={ComponentB} />
                    </Route>
                    <Route path="*" component={NotFound} />
                </Router>
            </MuiThemeProvider>
        );
    }
}
