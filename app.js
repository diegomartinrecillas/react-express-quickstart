var express = require('express');
var path = require('path');
// let favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
// Import Webpack
var wdm = require("webpack-dev-middleware");
var whm = require("webpack-hot-middleware");
var webpack = require("webpack");
var config = require("./webpack.dev.config");
// Import Routes
var index = require('./routes/index');
var users = require('./routes/users');
// Express App
var app = express();
// Webpack transpiler
var transpiler = webpack(config);

// Print current node environment in the console
console.log(`ENVIRONMENT: ${process.env.NODE_ENV}\n`);

/**
* Webpack Middleware
* Used to enable Hot Module Replacement when we are in a development environment, this is,
* being able to reload specific modules when their respective file changes without needing
* a full reload.
*/
if (app.get('env') == 'development') {
    console.log('Hot Module Replacement is ready!\n');
    app.use(wdm(transpiler, {
        publicPath: config.output.publicPath,
        stats: {
            colors: true
        },
        log: console.log
    }));
    app.use(whm(transpiler));
}

/**
* View Engine Setup
* Set up of the view engine to be used, JSX in this case.
*/
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

/**
* Loggin and Parsing Middleware Setup, this is a standard configuration not much to modify.
*/
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

/**
* Public Routes
* All files inside the public folder will be made avaliable through http requests.
*/
app.use(express.static(path.join(__dirname, 'public')));

/**
* API Routes
* Important: All API Routes declarations must be done before we delegate control of the routes
* to the client.
*/
// Demo API
app.use('/api/users', users);

/**
* Index View
* Render Index and delegate all route management to the client, this should always go after we declare
* all other routes to be used server side, like API's etc.
*/
app.use('/*', index);

/**
* 404 Not Found Route Setup
* This goes after we have all our Routes declarations, it's essentially a fallback route.
* In this case this will NOT be relevant as we are delegating the route management to the client.
*/
// Catch 404 and forward to error handler
app.use((req, res, next) => {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});
// Error handler
app.use((err, req, res) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    // This renders ./views/error.jsx
    res.render('error');
});

module.exports = app;
