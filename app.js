
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');
var mongo = require('mongodb');
var monk = require('monk');

// connect to db
// db = monk('localhost:27017/blogtest');
db = monk('mongodb://peianwu:W4nn4b3384@ds053168.mongolab.com:53168/pwdb');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/math', routes.math);
app.get('/about', routes.about);
app.get('/newpost', routes.newpost);
app.get('/blog', routes.blog(db));
app.post('/addpost', routes.addpost(db));

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
