var a = []; 
for (var i = 0; i < 5; i++) {
	a[i] = function () {
		return i;
	}();
}
console.log(a);