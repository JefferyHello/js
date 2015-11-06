function f() {
	var sister = "大桃花";
	function c() {
		console.log(sister);
	}
	return c;
}
var sister = "大妹子";
f()();
