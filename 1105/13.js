function Girl(name, bf) {
	var secret = bf;
	this.name = name;
	this.showlover = function () {
		return secret;
	}
	this.movesecret = function (bf) {
		secret = bf;
	}
}
var girl = new Girl('林黛玉', '贾宝玉');
console.log(girl.showlover());
girl.movesecret('薛蟠');
console.log(girl.showlover());