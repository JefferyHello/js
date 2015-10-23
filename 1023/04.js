var by = function (name) {
	return function (o, p) {
		var a, b;
		if (typeof a === 'object' && typeof b === 'object' && a && b) {
			a = o[name];
			b = p[name];
			if (a === b) {
				return 0;
			}
			if (typeof a === typeof b) {
				return a < b ? -1 : 1;
			}
			return typeof a < typeof b ? -1 : 1;
		} else {
			throw {
				name: 'Error',
				message: 'Expected an object when sorting by ' + name
			};
		}
	};
};

var s = [
	{first: 'Joe', last: 'Besser'},
	{first: 'Moe', last: 'Howard'},
	{first: 'Joe', last: 'Derita'}
];
s.sort(by('first'));
console.log(s);
