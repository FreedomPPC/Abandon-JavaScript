// 装饰器 前端埋点 在ajax的请求中包装一层自己的逻辑
// 判断this是谁，就看调用时，前面是谁，this就是谁
Function.prototype.before = function (callback) {
	const self = this;
	return function () {
		callback();
		self.apply(self, arguments);
	};
};

function fn(val) {
	console.log('一定的功能--' + val);
}

const newFn = fn.before(function () {
	console.log('在函数执行前执行');
});

newFn('你好');
