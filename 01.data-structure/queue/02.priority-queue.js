// 优先队列 使用es5 写

// 1. 每个新增的元素不是放在队列的末尾，而是按照指定的优先级放置到指定的位置
// 2. 每个元素都有自己的优先级
function PriorityQueue() {
    this.container = [];
}

PriorityQueue.prototype = {
    constructor: PriorityQueue,

    // 进队列
    enter(element, priority = 0) {
        const obj = {
            value: element,
            priority,
        };
        if (priority === 0 || this.size() === 0) {
            this.container.push(obj);
            return;
        } else {
            let flag = false;
            // 如果指定优先级，我们需要从最后一项依次来比较
            for (let i = this.container.length - 1; i >= 0; i--) {
                let item = this.container[i];
                if (item.priority >= priority) {
                    this.container.splice(i + 1, 0, obj);
                    flag = true;
                    break;
                }
            }
            !flag ? this.container.unshift(obj) : null;
        }
    },
    // 出队列
    leave() {
        if (this.container.length === 0) return;
        this.container.shift();
    },
    // 查看队列长度
    size() {
        return this.container.length;
    },
    // 查看队列内容
    value() {
        return JSON.parse(JSON.stringify(this.container));
    },
};

const pqe = new PriorityQueue();

pqe.enter(1, 1);
pqe.enter(2, 0);
pqe.enter(3, 2);
console.log(pqe);
