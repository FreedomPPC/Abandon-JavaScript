const fs = require('fs');

// 发布 订阅 订阅一次，发布多次
function EventEmitter() {
	this._arr = [];
}
EventEmitter.prototype.on = function (callback) {
	// 发布
	this._arr.push(callback);
};

EventEmitter.prototype.emit = function () {
	// 订阅
	this._arr.forEach(fn => fn.apply(this, arguments));
};
const e = new EventEmitter();
const user = {};

e.on(function (key, data) {
	user[key] = data;

	if (Object.keys(user).length === 2) {
		console.log(user);
	}
});
fs.readFile('./assets/name.txt', 'utf8', function (err, data) {
	if (err) return console.log(err);
	e.emit('name', data);
});
fs.readFile('./assets/age.txt', 'utf8', function (err, data) {
	if (err) return console.log(err);
	e.emit('age', data);
});
