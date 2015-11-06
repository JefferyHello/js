function Tiger() {
	this.bark = function () {
		console.log('老虎');
	}
}
function Cat() {
	this.climb = function () {
		console.log('爬树');
	}
}
var hu = new Tiger();
Tiger.prototype = new Cat();
hu.climb();
