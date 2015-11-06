function a(b) {
	console.log(b);
	function b() {
		console.log(b);
	}
	b();
}
a(1);