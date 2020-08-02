/**
 * 二进制 0 1
 * 八进制 0 ~ 7
 * 十进制 0 ~ 9
 * 十六进制 0 ~ 9 A（10）~F（15）
 */

//  十进制转二进制 可以用toString()的方法，但是我们自己转

/**
 * 十进制转二进制的规则
 * 要把十进制转二进制，我们可以将该十进制的数除以2（二进制满二进一）并对商取整
 * 知道结果是0未知。
 */
const Stack = require('../Stack');

function decimalToBinary(decNumber) {
    const remStack = new Stack();
    let num = decNumber;
    let rem;
    let binaryStr = '';

    while (num > 0) {
        rem = Math.floor(num % 2);
        remStack.push(rem);
        num = Math.floor(num / 2);
    }
    while (!remStack.isEmpty()) {
        binaryStr += remStack.pop().toString();
    }
    return binaryStr;
}
console.log(decimalToBinary(6));
