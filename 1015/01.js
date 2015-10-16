function addTen(num) {
	num += 10;
	return num;
}
var count = 20;
var result = addTen(count);
console.log(count);
console.log(result);

console.log("-------------");
function setName(obj) {
	obj.name = "Nicholas";
	obj = new Object();
	obj.name = "Greg";
}
var person = new Object();
setName(person);
console.log(person.name);

console.log("-----------");
var s = "Nicholas";
var b = true;
var i = 22;
var u;
var n = null;
var o = new Object();

console.log(typeof s); 
console.log(typeof b); 
console.log(typeof i); 
console.log(typeof u); 
console.log(typeof n); 
console.log(typeof o); 

console.log("----------");
var color = "blue";

function changeColor() {
	var anotherColor = "red";

	function swapColors() {
		var tempColor = anotherColor;
		anotherColor = color;
		color = tempColor;
	}

	swapColors();
}

changeColor();

console.log("------");
if (true) {
	var color = "blue";
}
console.log(color);

for (var i=0; i<10; i++) {

}
console.log(i);

console.log("+++");
function add(num1, num2) {
	sum = num1 + num2;
	return sum;
}
var result = add(10, 20);
console.log(sum);

console.log("-=-=-=");
var color = "blue";
function getColor() {
	var color = "red";
	return color;
}

console.log(getColor());

