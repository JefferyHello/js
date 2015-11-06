var str1 = 'global';
function t1() {
	console.log(str1);
	console.log(str2);
	var str2 = 'local';
}
t1();