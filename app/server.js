var express = require('express');
var hbs = require('hbs').create();
var favicon = require('serve-favicon');
var errorHandler = require('errorhandler');
var path = require ('path');

var routes = require('./routes');
var config = require('./config');

var app = express();

app.engine('hbs', hbs.__express);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname + '/views/'));

hbs.registerPartials(__dirname + '/views/partials');

app.set('port', process.env.OPENSHIFT_NODEJS_PORT || 8080);
app.set('host', process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1');

app.disable('etag');

app.get('/', routes.index);

app.use("/", express.static(__dirname + "/public/"));
// app.use(favicon(__dirname + '/public/images/favicon.ico'));

if ('development' == app.get('env')) {
    app.use(errorHandler({ dumpExceptions: true, showStack: true }));
}

if ('production' == app.get('env')) {
	app.use(errorHandler());
};

app.listen(app.get('port'), app.get('host'), function() {
	console.log("Listening on " + app.get('host') + ":" + app.get('port'));
});