var result = 5 + 5;
console.log(result);

var result2 = 5+ "5";
console.log(result2);

var num1 = 5;
var num2 = 10;
var message = "The sum of 5 and 10is " + (num1 + num2);
console.log(message);

console.log("---------------");
console.log(5 - true);
console.log(NaN - 1);
console.log(5 - 3);
console.log(5 - "");
console.log(5 - "2");
console.log(5 - null);

console.log("-----------");
console.log(5 < 3);

var result = "Brick".toLowerCase() < "alphabet".toLowerCase();
console.log(result);

var result = "23" < 3;
console.log(result);

var result1 = NaN >= 3;
var result2 = NaN <= 3;
console.log(result1);
console.log(result2);

console.log("-----------------------");
var result1 = ("55" != 55);
var result2 = ("55" !== 55);
console.log(result1);
console.log(result2);

console.log("----");
var num = (5, 1, 4, 8, 0)
console.log(num);

console.log("--------");
var count = 10;
var i = 0;
for (; i < count;) {
	console.log(i);
	 i++;
}

console.log("--------");
var count = 10;
var  i = 0;
while (i < count) {
	console.log(i);
	i++;
}

console.log("-=-=-=-=-=--=");
var num = 0;
for (var i=1; i < 10; i++) {
	if (i % 5 == 0) {
		continue;
	}
	num++;
}
console.log(num);

console.log("-break------------");
var num = 0;
outermost:
for (var i=0; i<10; i++) {
	innerlabel:
	for (var j=0; j<10; j++) {
		if (i == 5 && j == 5) {
			break innerlabel;
		}
		num++;
	}
}
console.log(num);

console.log("switch----------");
var i = 25;

switch (i) {
	case 25: 
	// console.log(25);
	// break;
	/*合并两种情形*/
	case 35: console.log("25 or 35");
	break;
	case 45: console.log("45");
	break;
	default: console.log("Other");
}
console.log("switch----------");
switch ("hello world") {
	case "hello" + " world":
	console.log("Greering was found.");
	break;
	case "goodbye":
	console.log("Closing was found.");
	break;
	default:
	console.log("Unexpected message");
}

console.log("-------------");
var num = 12;
switch (true) {
	case num<0:
	console.log("Less than 0");
	break;
	case num>=0 && num<=10:
	console.log("Between 0 and 10");
	break;
	case num>10 && num<=20:
	console.log("Between 10 and 20");
	break;
	default:
	console.log("More than 20.");
}
console.log("function-----------------");
function sum(num1, num2) {
	return num1 + num2;
	console.log("Hello world");
}
var result = sum(1,2);

console.log("-----------------");
function sayHi() {
	console.log("Hello "+arguments[0]+","+arguments[1]);
}
sayHi("ZhangSan", "how are you today?");
console.log("--++--");
function howManyArgs() {
	console.log(arguments.length);
}
howManyArgs(1,2,3);
howManyArgs();
howManyArgs("1", 2);

console.log("+------------------+");
function doAdd() {
	if (arguments.length == 1) {
		console.log(arguments[0] + 10);
	} else if (arguments.length == 2) {
		console.log(arguments[0] + arguments[1]);
	}
}
doAdd(10);
doAdd(30, 20);

console.log("+----------+");
function doSomeNumber(num) {
	return num + 100;
}
function doSomeNumber(num) {
	return num + 200;
}
var result = doSomeNumber(100);
console.log(result);
