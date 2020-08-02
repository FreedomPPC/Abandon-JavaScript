setTimeout(() => {
    console.log(1);
}, 20);

console.log(2);

setTimeout(() => {
    console.log(3);
}, 10);

console.log(4);

for (let i = 0; i < 90000000; i++) {
    // do sometion 79ms
}

console.log(5);

setTimeout(() => {
    console.log(6);
}, 8);

console.log(7);

setTimeout(() => {
    console.log(8);
}, 15);

console.log(9);

// 结果 2 4 5 7 9     3 1 6 8

/**
 * 分析：首先执行同步代码，这个没有异议 2 4 5 7 9；
 * 在执行同步代码的过程中，事件监听器会监听定时是否到了时间，然后会把定时器里的回调函数
 * 放入事件队列里，所以就是先放 3 再放 1；因为循环执行是79ms；所以循环未结束，前面两个
 * 定时器的回调函数已经在队列中了。
 * 然后再放后面两个定时中的回调，根据定时器的时间来放置，所以是6 8
 */
