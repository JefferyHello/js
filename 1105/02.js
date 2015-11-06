console.log(window.d);
console.log(window.e);
function f() {
	d = 5;
	var e = 6;
}
f();
console.log(window.d);
console.log(window.e);
