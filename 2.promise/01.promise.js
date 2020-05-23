// Promise 是一个类 承诺 允诺 （是一个异步解决方案）
// pending 等待状态 -> fulfilled 成功态
// pending 等待状态 -> rejected 失败态
// 成功态和失败态 不能相互转化
// excutor函数 而且会立即执行，参数是resolve函数 reject函数
// 每个promise实例都有一个then方法
const Promise = require('./base-promise');
const promise = new Promise(function (resolve, reject) {
	console.log('promise立即执行');
	setTimeout(() => {
		resolve('成功');
	}, 1000);
});

promise.then(
	function (res) {
		console.log(res);
	},
	function (err) {
		console.log(err);
	}
);
promise.then(
	function (res) {
		console.log(res);
	},
	function (err) {
		console.log(err);
	}
);
promise.then(
	function (res) {
		console.log(res);
	},
	function (err) {
		console.log(err);
	}
);
