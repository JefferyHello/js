var numbers = [1,2,3,4,5,4,3,2,1];

console.log(numbers.indexOf(4));
console.log(numbers.lastIndexOf(4));

console.log(numbers.indexOf(4,4));
console.log(numbers.lastIndexOf(4,4));


var person = {name: "Faiz"};
var people = [{name: "Faiz"}];

var morePeople = [person];

console.log(people.indexOf(person));
console.log(morePeople.indexOf(person));

var numbers = [1,2,3,4,5,4,3,2,1];
var everyResult = numbers.every(function (item, index, array) {
	return (item > 2);
}); 
console.log(everyResult);

var someResult = numbers.some(function (item, index, array) {
	return (item > 2);
});
console.log(someResult);

var filterResult = numbers.filter(function (item, index, array) {
	return (item > 2);
});
console.log(filterResult);

var mapResult = numbers.map(function (item, index, array) {
	return item*2;
});
console.log(mapResult);

var values = [1,2,3,4,5];
var sum = values.reduceRight(function (prev, cur, index, array) {
	return prev + cur;
});
console.log(sum);

var pattern1 = / \[bc\]at/i;
console.log(pattern1.global);
console.log(pattern1.ignoreCase);
console.log(pattern1.multiline);
console.log(pattern1.lastIndex);
console.log(pattern1.source);

var pattern2 = new RegExp("\\[bc\\]at", "i");
console.log(pattern2.global);
console.log(pattern2.ignoreCase);
console.log(pattern2.multiline);
console.log(pattern2.lastIndex);
console.log(pattern2.source);

var text = "mom and dad and baby";
var pattern = /mom( and dad( and baby)?)?/gi;
var martches = pattern.exec(text);
console.log(martches.index);
console.log(martches.input);
console.log(martches[0]);
console.log(martches[1]);
console.log(martches[2]);

var text = "cat, bat, sat, fat";
var pattern1 = /.at/;

var martches = pattern1.exec(text);
console.log(martches.index);
console.log(martches[0]);
console.log(pattern1.lastIndex);

martches = pattern1.exec(text);
console.log(martches.index);
console.log(martches[0]);
console.log(pattern1.lastIndex);

var pattern2 = /.at/g;

var martches = pattern2.exec(text);
console.log(martches.index);
console.log(martches[0]);
console.log(pattern2.lastIndex);

martches = pattern2.exec(text);
console.log(martches.index);
console.log(martches[0]);
console.log(pattern2.lastIndex);

var text = "000-00-0000";
var pattern = /\d{3}-\d{2}-\d{4}/;

if (pattern.test(text)) {
	console.log("The pattern was matched.");
}

var pattern = new RegExp("\\[bc\\]at", "gi");
console.log(pattern.toString());
console.log(pattern.toLocaleString());

var text = "This has been a short summer";
var pattern = /(.)hort/g;

if (pattern.test(text)) {
	console.log(RegExp.$_);
	console.log(RegExp.["$`"]);
	console.log(RegExp.["$'"]);
	console.log(RegExp.["$&"]);
	console.log(RegExp.["$+"]);
	console.log(RegExp.["$*"]);
}

console.log("------------------->");
var text = "This has been a short summer";
var pattern = /(..)or(.)/g;

if (pattern.test(text)) {
	console.log(RegExp.$1);
	console.log(RegExp.$2);
}
