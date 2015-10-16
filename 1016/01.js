var stringValue = "Hello ";
var result = stringValue.concat("world", "!");
console.log(result);
console.log(stringValue);

var stringValue = "Hello world";
console.log(stringValue.slice(-3));
console.log(stringValue.substring(-3));
console.log(stringValue.substr(-3));
console.log(stringValue.slice(3,-4));
console.log(stringValue.substring(3,-4));
console.log(stringValue.substr(3,-4));

var stringValue = "hello world";
console.log(stringValue.indexOf("o", 6));
console.log(stringValue.lastIndexOf("o", 6));

var stringValue = "Lorem ipsum dolor sit amet, cinsectetur adipisicing elit";
var position = new Array();
var pos = stringValue.indexOf("e");
while (pos >- 1) {
	position.push(pos);
	pos = stringValue.indexOf("e", pos+1);
}
console.log(position);

var stringValue = "  hello word  ";
var trimmedStringValue = stringValue.trim();
console.log(stringValue);
console.log(trimmedStringValue);

var stringValue = "hello world";
console.log(stringValue.toUpperCase());
console.log(stringValue.toLowerCase());
console.log(stringValue.toLocaleUpperCase());
console.log(stringValue.toLocaleLowerCase());

var text = "cat, bat, sat, fat";
var pattern = /.at/g;

var matches = text.match(pattern);
// var matches = pattern.exec(text);
console.log(matches.index);
console.log(matches[0]);
console.log(matches[1]);
console.log(matches[2]);
console.log(matches[3]);
console.log(pattern.lastIndex);

var text = "cat, bat, sat, fat";
var pos = text.search(/at/);
console.log(pos);

var result = text.replace("at", "ond");
console.log(result);

result = text.replace(/at/g, "ond");
console.log(result);

var text = "cat, bat, sat, fat";
var result = text.replace(/(.at)/g, "word ($1)");
console.log(result);

console.log("---------------------------------->");
function determineOrder(stringValue, value){
	var result = stringValue.localeCompare(value);
	if (result < 0) {
		console.log("The sting '" + stringValue + "' comes before the string '" + value+"'.");
	} else if (result > 0) {
		console.log("The sting '" + stringValue + "' comes after the string '" + value+"'.");
	} else {
		console.log("The sting '" + stringValue + "' is equal to the string '" + value+"'.");
	}
}

stringValue = "yellow";
determineOrder(stringValue, "brick");
determineOrder(stringValue, "yellow");
determineOrder(stringValue, "zoo");
