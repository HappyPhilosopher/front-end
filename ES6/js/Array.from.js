// Array.from(arrayLike[, mapFn[, thisArg]])
// const obj = {
//   a: 2
// };

// console.log(
//   Array.from([1, 2, 3], function(item) {
//     return item * this.a;
//   }, obj)
// );

// 已知某对象拥有长度属性，为其赋值并改造为数组
console.log(Array.from({ length: 5 }, (item, index) => index));
console.log(Array.from({ length: 4 }, item => 1));
