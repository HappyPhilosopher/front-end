// 返回值是对象时，可用 {} 将其包裹
/* const sum = (x, y) => ({ x: x, y: y });
console.log(sum('a', 'b')); */

// 数组排序
/* const arr = [234, 654, 21, 543, 66, 235, 365];
// 从小到大排序：Array.prototype.sort() 会改变原数组
arr.sort((a, b) => a - b);
console.log(arr); */

// 箭头函数内的 this 对象，就是定义时所在的对象，而不是使用时所在的对象。
// 以下 this 在 obj 定义时生效，它的 this 便与 obj 一样处在 window 对象下，
// 而 window 对象没有 text 这个属性，所以返回 undefined（这里结果不同是因为使用 webpack 编译导致）
// 在 ES6 之前，使用 var 定义的全局变量，会挂载到 window 成为它的属性
// ES6 之后，使用 let/const/class 定义的全局变量，属于一个未定义的顶层对象，故 window.xxx 返回为 undefined
const obj = {
  text: 'test',
  sayName: () => {
    console.log(this.text);
  }
};

obj.sayName();

function fn() {
  setTimeout(() => {
    console.log(this);
  }, 1000);
}
fn.call({ a: 10 });
