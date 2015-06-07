var express = require('express'),
    path = require('path'),
    http = require('http'),
    app = express(),
    server = http.createServer(app);

app.set('port', process.env.PORT || 12345);
app.use(express.static(path.join(__dirname, 'app')));

app.get('/', function(req, res){
  res.sendfile(__dirname + '/index.html');
});

app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});

