var a = ['a', 'b', 'c'];
var b = ['x', 'y', 'z'];
var ar1 = a.concat(b, true);
console.log(a);
a.push(b, true);
console.log(ar1);
console.log(a);
