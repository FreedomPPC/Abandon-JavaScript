// const Promise = require('./02.chained-promise');

const promise = new Promise((resolve, reject) => {
	resolve(123);
});

promise
	.then(data => {
		return data;
	})
	.then(res => {
		console.log(res);
	});
