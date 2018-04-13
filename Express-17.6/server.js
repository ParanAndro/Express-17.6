var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views','./views');
app.use('/store', function(req, res, next){
	console.log('Jestem pośrednikiem przy żądaniu do /store');
	next();
});

app.get('/', function (req, res) {
	res.send('Hello World');
});

app.get('/store', function (req, res) {
	res.send('To jest sklep');
});

app.get('/first-template', function(req, res) {
	res.render('first-template');
});

app.get('/auth/google', function(req, res) {
	res.render('google-log');
});

app.get('/logout', function(req, res) {
	res.render('google-user');
});

app.listen(3003);
app.use(function (req, res, next) {
	res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
});