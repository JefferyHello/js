var chicken = {
	leg : 2,
	song : function () {console.log('我是一只小小鸟！')}
}
console.log(chicken);
chicken.wine = 2;
delete chicken.song;
console.log(chicken);