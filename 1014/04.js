var text = "This is the letter sigma: \u03a3.";
console.log(text);
console.log(text.length);


var num = 10;
console.log(num.toString(2));
console.log(num.toString(8));
console.log(num.toString(10));
console.log(num.toString(16));
console.log(num.toString());
console.log(num.toString(6));

var value1 = 10;
var value2 = true;
var value3 = null;
var value4;

console.log("-=-=-=-=-=");
console.log(String(value1));
console.log(String(value2));
console.log(String(value3));
console.log(String(value4));


console.log("+++++++++++++");
var age = 29;
var anotherage = --age + 2;
console.log(age);
console.log(anotherage);

console.log("++++++++");
var num1 = 2;
var num2 = 20;
var num3 = --num1 + num2;
var num4 = num1 + num2;
console.log(num1);
console.log(num3);
console.log(num4);

console.log("------------");
var num1 = 2;
var num2 = 20;
var num3 = num1-- + num2;
var num4 = num1 + num2;
console.log(num1);
console.log(num3);
console.log(num4);

console.log("+------------------+");
var s1 = "2";
var s2 = "z";
var b = false;
var f = 1.1;
var o = {
	valueOf: function() {
		return -1;
	}
}

console.log(s1++);
console.log(s2++);
console.log(b++);
console.log(f--);
console.log(o--);

console.log("+------------------+");
var s1 = "01";
var s2 = "1.1";
var s3 = "z";
var b = false;
var f = 1.1;
var o = {
	valueOf: function() {
		return -1;
	}
}

console.log(+s1);
console.log(+s2);
console.log(+s3);
console.log(+b);
console.log(+f);
console.log(+o);

console.log("-++++++++++++++++-");
var num = 25;
num = -num;
console.log(num);


console.log("+------------------+");
var s1 = "01";
var s2 = "1.1";
var s3 = "z";
var b = false;
var f = 1.1;
var o = {
	valueOf: function() {
		return -1;
	}
}

console.log(-s1);
console.log(-s2);
console.log(-s3);
console.log(-b);
console.log(-f);
console.log(-o);

console.log("------------");
var num = -18;
console.log(num.toString(2));

console.log("------------");
var num1 = 25;
var num2 = ~num1;
var num3 = -num1 - 1;
console.log(num2);
console.log(num3);

var result = 25 & 3;
console.log(result); 

var result = 25 | 3;
console.log(result);

var result = 25 ^ 3;
console.log(result);

var oldValue = 2;
var newValue = oldValue << 5;
console.log(newValue);

var oldValue = 64;
var newValue = oldValue >> 5;
console.log(newValue);

var oldValue = 64;
var newValue = oldValue >>> 5;
console.log(newValue);

var oldValue = -64;
var newValue = oldValue >>> 5;
console.log(newValue);

console.log("--------");
console.log(!false);
console.log(!"blue");
console.log(!0);
console.log(!NaN);
console.log(!"");
console.log(!12345);

console.log("+++++++++");
console.log(!!"blue");
console.log(!!0);
console.log(!!NaN);
console.log(!!"");
console.log(!!12345);


console.log("------------");
var found = false;
var result = (found && someundefinedvalue);
console.log(result);

console.log("------------");
var found = true;
var result = (found || someundefinedvalue);
console.log(result);