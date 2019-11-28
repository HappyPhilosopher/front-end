// rest 参数用来获取实参
/* function sum(base, ...rest) {
  return rest.reduce((acc, cur) => acc + cur) + base * 2;
}

console.log(sum(1, 2, 3, 4)); */

// 扩展运算符
function sum(x = 1, y = 2, z = 3) {
  return x + y + z;
}

console.log(sum(...[2, 3, 4]));
