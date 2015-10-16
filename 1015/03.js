var colors = ["red", "blue", "green"];
colors[99] = "black";
// colors[colors.length] = "brown";

console.log(colors.length);

var colors = ["red", "blue", "green"];
console.log(colors.toString());
console.log(colors.valueOf());
console.log(colors);

var person1 = {
	toLocaleString : function () {
		return "Nikolaos";
	},

	toString : function () {
		return "Nicholas";
	}
};

var person2 = {
	toLocaleString : function () {
		return "Faiz";
	},
	
	toString : function () {
		return "Faizz";
	}	
};

var people = [person1, person2];
console.log(people);
console.log(people.toString);
console.log(people.toLocaleString);

var colors = ["red", "green", "blue"];
console.log(colors.join());
console.log(colors.join(","));
console.log(colors.join("-"));
var colors = new Array();
var count = colors.push("red", "green");
console.log(count);

var count = colors.push("black");
console.log(count);

var item = colors.pop();
console.log(item);
console.log(colors.length);
var colors = ["red", "blue"];
colors.push("brown");
colors[3] = "black";
console.log(colors.length);
var item = colors.pop();
console.log(item);
var colors = new Array();
var count = colors.push("red", "green");
console.log(count);
count = colors.push("black");
console.log(count);
var item = colors.shift();
console.log(item);
console.log(colors.length);
var colors = new Array();
var count = colors.unshift("red", "green");
console.log(count);
count = colors.unshift("black");
console.log(count);
var item = colors.pop();
console.log(item);
console.log(colors.length);

var values = [1,2,3,4,5];
values.reverse();
console.log(values);
var values = [0,1,5,10,15];
values.sort();
console.log(values);

function compare(value1, value2) {
	if (value1 < value2) {
		return        1;
	} else if (value1 > value2) {
		return -1;
	} else {
		return 0;
	}
}

var values = [0,1,5,10,15];
values.sort(compare);
console.log(values);

var colors = ["red", "green", "blue"];
var colors2 = colors.concat("yellow", ["black", "brown"]);

console.log(colors);
console.log(colors2);

var colors = ["red", "green", "blue", "yellow", "black", "brown"];
var colors2 = colors.slice(1);
var colors3 = colors.slice(1,4);
console.log(colors);
console.log(colors2);
console.log(colors3);

console.log("----------------->");
var colors = ["red", "green", "blue"];
var removed = colors.splice(0,1);
console.log(colors);
console.log(removed);

removed = colors.splice(1,0,"yellow","orange");
console.log(colors);
console.log(removed);

removed = colors.splice(1,1,"red", "purple");
console.log(colors);
console.log(removed);