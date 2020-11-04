class Stack {
    constructor() {
        this.items = [];
    }
    // 添加元素
    push(element) {
        this.items.push(element);
    }
    // 从栈顶移除元素
    pop() {
        return this.items.pop();
    }
    // 返回栈顶元素
    peek() {
        return this.items[this.items.length - 1];
    }
    // 栈是否为空
    isEmpty() {
        return this.items.length === 0;
    }
    // 栈大小
    size() {
        return this.items.length;
    }
    // 清空栈
    clear() {
        this.items = [];
    }
}

module.exports = Stack;
