var readline = require('readline');

function getPow(x, n) {
	if (n === 1) return x;
	else return getPow(x, n - 1) * x;
}

var r1 = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

r1.question("Enter your values: ", function(answer) {
	var num, power;

	num = +answer.split(' ')[0];
	power = +answer.split(' ')[1];

	console.log(getPow(num, power));

	r1.close();
});