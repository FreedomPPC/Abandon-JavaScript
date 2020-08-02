// 击鼓传花游戏
const Queue = require('../Queue');

function hotPotato(players, num) {
    const queue = new Queue();
    const storeCurrentPlayer = []; // 存储出队列的人

    // // 第一步，轮询palyers 入队
    for (let player of players) {
        queue.enqueue(player);
    }

    // // 第二步，while循环，直到队列剩一个人，就是赢家
    while (queue.size() > 1) {
        // 当报数报到num的时候，停止循环，此时队列的头一个就是要出局的人
        for (let i = 0; i < num; i++) {
            queue.enqueue(queue.dequeue());
        }
        storeCurrentPlayer.push(queue.dequeue()); // 存储出局的人
    }

    return {
        losers: storeCurrentPlayer,
        winner: queue.dequeue(),
    };
}

const players = ['xiaoming', 'xiaohong', 'xiaogang', 'xiaohua'];

console.log(hotPotato(players, 2));
