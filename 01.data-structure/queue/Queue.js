// 使用对象来模拟队列
class Queue {
    constructor() {
        this.count = 0;
        this.lowestCount = 0; // 记录头元素
        this.items = {};
    }
    // 向队列尾部添加一个或者多个元素
    enqueue(element) {
        this.items[this.count] = element;
        this.count++;
    }
    // 移除队列的第一项，并返回被移除的元素
    dequeue() {
        if (this.isEmpty()) return;

        const result = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return result;
    }
    // 返回队列的第一个元素
    peek() {
        if (this.isEmpty()) return;
        return this.items[this.lowestCount];
    }
    // 判断队列是否为空
    isEmpty() {
        return this.count - this.lowestCount === 0;
    }
    // 返回队列的元素个数
    size() {
        return this.count - this.lowestCount;
    }
}

module.exports = Queue;
