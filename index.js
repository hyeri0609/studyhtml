var express = require('express');
var app = express();
var bodyParser = require('body-parser');

  // app.use(express.static('public'));
  // app.use(express.cookieParser());
  // app.use(express.bodyParser());
  // app.use(express.session({ secret: 'keyboard cat' }));
  // app.use(passport.initialize());
  // app.use(passport.session());
  // app.use(app.router);
  
  
//   var session = require("express-session"),
//     bodyParser = require("body-parser");

// app.use(express.static("public"));
// app.use(session({ secret: "cats" }));
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(passport.initialize());
// app.use(passport.session());


app.set('port', (process.env.PORT || 5000));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));
//app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded








var apirouter = express.Router();
// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
apirouter.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});
apirouter.route('/textformat').post(function(req, res) {
  //console.log(req);
  console.log(req.body.data);
  res.json({ message: 'hooray! welcome to our api!' }); 
});
app.use('/api', apirouter);

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('/admin', (request, response) => response.render('pages/admin'));

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
