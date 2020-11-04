var str = 'good good study, day day up';

var reg = /\b([a-zA-Z])[a-zA-Z]*\b/g;

str = str.replace(reg, (...args) => {
	let [word, $1] = args;
	word = word.substring(1);
	$1 = $1.toUpperCase();
	return $1 + word;
});

console.log(str);
