var octalNum1 = 070;
var octalNum2 = 079;
var octalNum3 = 08;

console.log(octalNum1);
console.log(octalNum2);
console.log(octalNum3);

console.log(0.1+0.2);

var result = Number.MAX_VALUE + Number.MAX_VALUE;
console.log(isFinite(result));

console.log(0/0);
console.log(NaN == NaN);

console.log("---------");
console.log(isNaN(NaN));
console.log(isNaN(10));
console.log(isNaN("10"));
console.log(isNaN("blue"));
console.log(isNaN(true));

console.log("---------");
var num1 = Number("Hello world");
var num2 = Number("");
var num3 = Number("000011");
var num4 = Number(true);
console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);

console.log("---------+");
console.log(parseInt("1234blue"));
console.log(parseInt(""));
console.log(parseInt("0xA"));
console.log(parseInt(22.5));
console.log(parseInt("070"));
console.log(parseInt("70"));
console.log(parseInt("0xf"));

console.log("+++++++++++++");
console.log(parseInt("0xAF", 16));
console.log(parseInt("AF", 16));
console.log(parseInt("AF"));

console.log("------------");
console.log(parseInt("10", 2));
console.log(parseInt("10", 8));
console.log(parseInt("10", 10));
console.log(parseInt("10", 16));
console.log(parseInt("10", 6));

console.log("------------parseFloat");
console.log(parseFloat("1234blue"));
console.log(parseFloat("0xA"));
console.log(parseFloat("22.5"));
console.log(parseFloat("22.34.5"));
console.log(parseFloat("0908.5"));
console.log(parseFloat("3.125e7"));
console.log(parseFloat("3.125e7e10"));





