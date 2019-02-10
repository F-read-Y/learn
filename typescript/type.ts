function power(x: number, n: number) {
	if (n === 1) return x;
	else return x * power(x, n - 1);
}

alert(power(2, 10));
