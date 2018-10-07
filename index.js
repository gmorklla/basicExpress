const express = require('express');
const app = express();
const config = require('./config.js');
const matrix = require('node-sense-hat').Leds;
const Twit = require('twit');

const T = new Twit(config);

app.get('/setX', function(req, res) {
	setMatrix();
	res.send('Set X on matrix');
});

app.get('/apagar', function(req, res) {
	matrix.clear();
	res.send('Apagando matrix');
});

app.get('/tweet', function(req, res) {
	tweet();
});

app.listen(3000, function() {
	console.log('Example app listening on port 3000!');
});

const tweet = () => {
	T.post('statuses/update', { status: 'hello world!' }, function(err, data, response) {
		console.log(data)
	});
}

const setMatrix = () => {
	const O = [0, 0, 0];
	const X = [255, 0, 0];

	const cross = [
		X, O, O, O, O, O, O, X,
		O, X, O, O, O, O, X, O,
		O, O, X, O, O, X, O, O,
		O, O, O, X, X, O, O, O,
		O, O, O, X, X, O, O, O,
		O, O, X, O, O, X, O, O,
		O, X, O, O, O, O, X, O,
		X, O, O, O, O, O, O, X,
	];

	matrix.setPixels(cross);

	// To fill with a single color instead
	// matrix.clear([127, 0, 0]);
} 
