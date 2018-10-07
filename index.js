const express = require('express');
const app = express();
const matrix = require('node-sense-hat').Leds;

app.get('/', function(req, res) {
	setMatrix();
	res.send('Hello World!');
});

app.listen(3000, function() {
	console.log('Example app listening on port 3000!');
});

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
	matrix.clear([127, 0, 0]);
} 
