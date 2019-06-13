var express = require('express');
var app = express();
var passport   = require('passport');
var session    = require('express-session');
var bodyParser = require('body-parser');
var env = require('dotenv');


//For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// For Passport
app.use(session({ secret: 'secured word',resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

// Start the root app
app.get('/', function(req, res) {
    res.send('Welcome to The North Vicoba API');
});

// Configure the API port
app.listen(3000, function(err) {
     if (!err)
        console.log("The API is now online");
    else console.log(err)
 });

// Models
// var models = require("./app/models");
 
// Sync Database
/* models.sequelize.sync().then(function() {
    console.log('The database connects well')
}).catch(function(err) {
    console.log(err, "The database update went wrong somewhere!")
}); */