function heavyComputer(n) {
	var count = 0,
		i,j;
	
	for (i=n; i>0; --i) {
		for (j=n; j>0; j--) {
			count =+1;
		}
	}
}

var t = Date.now();

setTimeout(function () {
	console.log(Date.now() - t);
}, 1000);

heavyComputer(50000);