function after(times, callback) {
	// 只要满足一个高阶函数的特点，就是高阶函数
	return function () {
		if (--times === 0) {
			// times不会被销毁
			callback();
		}
	};
}

const newFn = after(3, function () {
	// 执行三次才会执行回调
	console.log('after');
});

newFn();
newFn();
newFn();
