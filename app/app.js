var express = require('express');

var app = express();

app.set('port', process.env.OPENSHIFT_NODEJS_PORT || 8080);
app.set('host', process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1');

app.get('/', function (req, res) {
  res.send('WebRTC LiveChat coming soon!')
})

app.listen(app.get('port'), app.get('host'), function() {
	console.log("Listening on " + app.get('host') + ":" + app.get('port'));
});