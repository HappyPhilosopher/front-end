// let map = new Map();
// map.set('a', 1);
// console.log(map);

// let map = new Map([
//   ['a', 1],
//   ['b', 2]
// ]);
// map.set('c', 3);
// map.delete('a');
// console.log(map.size);
// console.log(map);
// console.log(map.has('a'));
// console.log(map.get('a'));
// console.log(map.keys());
// console.log(map.entries());
// map.forEach((value, key) => {
//   console.log(value, key);
// });
// for (const [key, value] of map) {
//   console.log(key, value);
// }

/* const s = new Set();

[2, 3, 5, 4, 5, 2, 2].forEach(item => s.add(item));

for (const item of s) {
  console.log(item);
} */

// const set = new Set([1, 2, 3, 4, 4]);
// console.log(set.size);
// // 数组去重
// console.log(...set);
// console.log(...new Set([1, 2, 4, 5, 6, 3, 4]));

/* function dedupe(arr) {
  return Array.from(new Set(arr));
}
console.log(dedupe([1, 2, 3, 3, 4])); */

// console.log([...new Set(['red', 'green'])] instanceof Array);

// 利用 Set 实现并集（union）、交集（intersect）、差集（difference）
/* const a = new Set([1, 2, 3]);
const b = new Set([2, 3, 4]);

// 并集
console.log(new Set([...a, ...b]));

// 交集
console.log(new Set([...a].filter(item => b.has(item))));

// 差集
console.log(new Set([...a].filter(item => !b.has(item)))); */

/* const map = new Map([
  ['name', 'zhangsan'],
  ['title', 'Author']
]);

console.log(map.size);
console.log(map.get('name'));
console.log(map.has('title'));
map.delete('title');
console.log(map.has('title')); */

const goods = new Map([
  ['香烟', [100, 80, 60]],
  ['啤酒', [50, 40, 30]],
  ['饮料', [20, 10, 5]]
]);

let arr = [];

goods.forEach(item => {
  arr.push(item);
});

console.log(arr.map(item => Math.min(...item)).reduce((acc, cur) => acc + cur));
