// 查找某个元素
const arr = [1, 2, 3, 4, 5];
// const find = arr.filter(item => item > 3);
// console.log(find);

// const isExist = arr.includes(3);
// console.log(isExist);

const find = arr.find(item => item === 2);
// Array.prototype.find() 在找到第一个满足条件的数据后便不再继续往下查找，这点与 filter 不同
const findOne = arr.find(item => item > 2);
console.log(find, findOne);

// Array.prototype.findIndex() 在查找不到所需数据时，返回 -1
const index = arr.findIndex(item => item === 3);
console.log(index);
