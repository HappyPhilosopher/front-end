// ES6 提供了 Object 的简写形式，且其属性可做简单处理
/* const x = 1;
const y = 2;
const z = 3;
const obj = {
  x,
  y,
  // 在对象中添加新属性，只需用 [] 包起来即可
  [x + z]: 5
};
console.log(obj); */

const o = {
  name: 'Jack',
  age: 18
};

console.log(Object.values(o) instanceof Array);
