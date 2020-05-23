// 手写promise，基础源码
function Promise(excutor) {
	// promise状态
	this.state = 'pending';
	// resolve值
	this.value = undefined;
	// reject值
	this.reason = undefined;
	const self = this;

	self.onResolveCallbacks = []; // 存放等待态的resolve
	self.onRejectCallbacks = []; // 存放等待态的reject

	function resolve(value) {
		if (self.state === 'pending') {
			self.state = 'fulfilled';
			self.value = value;
			self.onResolveCallbacks.forEach(fn => fn());
		}
	}
	function reject(reason) {
		if (self.state === 'pending') {
			self.state = 'rejected';
			self.reason = reason;
			self.onRejectCallbacks.forEach(fn => fn());
		}
	}

	try {
		excutor(resolve, reject);
	} catch (e) {
		reject(e);
	}
}

Promise.prototype.then = function (onfulfilled, onrejected) {
	const self = this;
	if (self.state === 'fulfilled') {
		onfulfilled(self.value);
	}
	if (self.state === 'rejected') {
		onrejected(self.reason);
	}
	if (self.state === 'pending') {
		self.onResolveCallbacks.push(function () {
			onfulfilled(self.value);
		});
		self.onRejectCallbacks.push(function () {
			onrejected(self.reason);
		});
	}
};
module.exports = Promise;
