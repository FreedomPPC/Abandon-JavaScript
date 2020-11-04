<<<<<<< HEAD
var str = 'good good study, day day up';

var reg = /\b([a-zA-Z])[a-zA-Z]*\b/g;

str = str.replace(reg, (...args) => {
	let [word, $1] = args;
	word = word.substring(1);
	$1 = $1.toUpperCase();
	return $1 + word;
});

console.log(str);
=======
function queryParams(name) {
    var str = '?errno=0&errmsg=Auth%20Login%20Sucess&&bduss=&ssnerror=0&traceid=';
    var reg = new RegExp('(?:^|&)' + name + '=([^&]*)(?:&|$)', 'i');

    var arr = str.match(reg);

    console.log(arr);
}

queryParams('errmsg');
>>>>>>> da8266457d82314045734fe00634daa79c1e1ebd
