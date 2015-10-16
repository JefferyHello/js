function sum(num1, num2) {
	return num1+num2;
}

console.log(sum(10,10));

var anotherSum = sum;
console.log(anotherSum(10,10));

sum = null;
console.log(anotherSum(10,10));

function addSomeNumber(num) {
	return num+100;
}

function addSomeNumber(num) {
	return num+200;
}

var result = addSomeNumber(100);
console.log(result);

/*console.log(ss(10,10));
var ss = function (num1, num2) {
	return num1+num2;
};*/

function callSomeFunction (someFunction, someArgent) {
	return someFunction(someArgent);
}

function add10(num) {
	return num + 10;
}
var result1 = callSomeFunction(add10, 10);
console.log(result1);

function getGreeting(name) {
	return "Hello " + name;
}
var result2 = callSomeFunction(getGreeting, "Faiz");
console.log(result2);

function createComparisonFunction(propertyName) {
	return function(object1, object2) {
		var value1 = object1[propertyName];
		var value2 = object2[propertyName];

		if (value1 < value2) {
			return -1;
		} else if (value1 > value2) {
			return 1;
		} else {
			return 0;
		}
	};
}

var data = [{name: "Za", age: 28}, {name: "Ni", age: 29}];
data.sort(createComparisonFunction("name"));
console.log(data[0].name);

data.sort(createComparisonFunction("age"));
console.log(data[0].name);

function factorial(num) {
	if (num <= 1) {
		return 1;
	} else {
		return num*arguments.callee(num-1);
	}

}
	var trueFactorial = factorial;
	factorial = function(){
		return 0;
	}

	console.log(trueFactorial(5));
	console.log(factorial(5));

var color = "red";
var o = {color:"blue"};
function sayColor(){
	console.log(this.color);
}
sayColor();
o.sayColor = sayColor;
o.sayColor();

function outer() {
	inner();
}

function inner() {
	console.log(arguments.callee.caller);
}
outer();

function sayName(name) {
	console.log(name);
}
function sum1(num1,num2) {
	return num1+num2;
}
function sayHi() {
	console.log("hi");
}

console.log(sayName.length);
console.log(sum1.length);
console.log(sayHi.length)

function summ(num1, num2) {
	return num1+num2;
}

function callSum1(num1,num2) {
	return summ.call(this, num1, num2);	
}

function callSum2(num1, num2) {
	return summ.apply(this, [num1, num2]);
}

console.log(callSum1(10,10));
console.log(callSum2(10,10));

color = "red";
var o = { color: "blue"};
function sayColor() {
	console.log(this.color);
}
sayColor();

sayColor.call(this);
sayColor.call(o);

var s1 = "some text";
s1.color = "red";
console.log(s1.color);

var value = "25";
var number = Number(value);
console.log(typeof number);

var obj = new Number(value);
console.log(typeof obj);

var falseObject = new Boolean(true);
var result = falseObject && true;
console.log(result);

var falseValue = false;
result = falseValue && true;
console.log(result);

var numberObject = new Number(10);
var numberValue = 10;

console.log(typeof numberObject);
console.log(typeof numberValue);
console.log(numberObject instanceof Number);
console.log(numberValue instanceof Number);

console.log("---------------->");
var num = 99;
console.log(num.toPrecision(1));
console.log(num.toPrecision(2));
console.log(num.toPrecision(3));