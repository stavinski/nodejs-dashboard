
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , widgets = require('./widgets')
  , credentials = require('./credentialStore')
  , http = require('http')
  , path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());

app.use(express.basicAuth(function (user, password, callback) {
    credentials.getCredentials('dashboard', function (err, credentials) {
        var result = user===credentials.username && password===credentials.password;
        callback(err, result);
    })
}));

app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);

// handling for individual widget
app.get('/widgets/:name', widgets.widget);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
