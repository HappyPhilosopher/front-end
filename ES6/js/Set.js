// Set 存储的数据是唯一的、不可重复的
// Set 接收一个可遍历的数据
// let s = new Set([1, 2, 3]);
// let s = new Set();
// s.add('hello').add('world').delete('hello');
// s.clear();
// let s = new Set([1, 2, 3]);
// console.log(s.size);
// console.log(s);
// console.log(s.has('hello'));
// console.log(s.has(1));
let s = new Set();
s.add('hello').add('world');
// console.log(s.entries());
// s.forEach(item => {
//   console.log(item);
// });
for (const item of s) {
  console.log(item);
}
