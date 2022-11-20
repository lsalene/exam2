// load the things we need
var express = require('express');
var app = express();
const bodyParser = require('body-parser');
const axios = require('axios');

var selectedID = "";
app.use(bodyParser.urlencoded());

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res){
    var link = 'https://randomuser.me/api/';
    const currTime = Date();
    axios.get(link)
        .then((response) => {
            let userData = response.data;
            console.log(userData);
            res.render('pages/index', {
                user: userData
            });
        });
})

app.listen(8080);
console.log('8080 is the magic port');
