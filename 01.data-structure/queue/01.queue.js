//  队列，先进先出，使用es6 写
class Queue {
    constructor() {
        this.container = [];
    }
    // 进队列
    enter(element) {
        this.container.push(element);
    }
    // 出队列
    leave() {
        if (this.container.length === 0) return;
        this.container.shift();
    }
    // 查看队列长度
    size() {
        return this.container.length;
    }
    // 查看队列内容
    value() {
        // 深度克隆是为了保证后期外面接收到的结果不论如何操作都不会影响内部容器的内容
        // this.container.slice(0) 浅拷贝 spread操作符（...） Object.assign() 都属于浅拷贝
        // JSON.parse(JSON.stringify(this.container)) 深拷贝，但是会有很多问题，暂且用这个
        return JSON.parse(JSON.stringify(this.container));
    }
}

const qe = new Queue();

qe.enter(1);
qe.enter(1);
qe.enter(1);
qe.enter(1);
qe.enter(1);
qe.enter(1);
qe.enter(1);
qe.enter(1);
console.log(qe.size());
console.log(qe.value());
