var c = 5;
function f1() {
	var d = 6;
	function f2() {
		var e = 7;
		var d = 5;
		console.log(c+d+e);
	}
	f2();
}
f1();