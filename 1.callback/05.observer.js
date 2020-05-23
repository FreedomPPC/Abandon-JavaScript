// 观察者模式 基于发布订阅模式
// 发布订阅 发布和订阅 两者无关
// 观察者模式 观察者 和 被观察者
// 被观察者 应该存放着观察者
// 被观察者状态变化，要更新自己身上所有的观察者

class Subject {
	constructor() {
		this.state = '微笑';
		this.observers = [];
	}
	attach(observer) {
		this.observers.push(observer);
	}
	setState(newState) {
		if (this.state !== newState) {
			this.state = newState;
			this.observers.forEach(observer => observer.update(newState));
		}
	}
}

// 应该每个数据变化，都应该对应自己的观察者，而不是一个数据变了，都要更新一下
class Observer {
	constructor(who) {
		this.who = who;
	}
	update(newState) {
		console.log(`Baby${newState}-${this.who}收到了`);
	}
}

const baby = new Subject();
const father = new Observer('父亲');
const mother = new Observer('母亲');

// 添加观察者
baby.attach(father);
baby.attach(mother);

// 被观察者更新状态
baby.setState('哭了');
