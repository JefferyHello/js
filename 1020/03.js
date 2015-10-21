function createFunction() {
	var result = new Array();
	for (var i=0; i<10; i++) {
		result[i] = function(num) {
			return num;
		}(i);
	}

	return result;
}

console.log(createFunction());