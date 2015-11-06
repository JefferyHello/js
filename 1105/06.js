function t(greet) {
	var greet = 'hello';
	console.log(greet);
	function greet() {}
	console.log(greet);
}
t(null);