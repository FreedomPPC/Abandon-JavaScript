// 需求：并发调用接口，两个ajax请求ajax1 => name ajax2 => age, 请求结束拿到name+age

const fs = require('fs'); // fileSystem

function after(times, callback) {
	const result = {};
	return function (key, data) {
		result[key] = data;
		if (--times === 0) {
			callback(result);
		}
	};
}
// after中的回调会在异步执行之后执行
const newFn = after(2, function (result) {
	// 可以作为promise.all的实现
	console.log(result);
});
// fs读取文件是从根目录开始读取
fs.readFile('./assets/name.txt', 'utf8', function (err, data) {
	if (err) return console.log(err);
	newFn('name', data);
});
fs.readFile('./assets/age.txt', 'utf8', function (err, data) {
	if (err) return console.log(err);
	newFn('age', data);
});

// 串行，两个人有关系，上一个人的输出是下一个人的输入
// 并行，两个人没有关系，可以一起执行

// 前端面试中，发布订阅（promise原理）观察者模式 观察者模式中包含发布订阅
