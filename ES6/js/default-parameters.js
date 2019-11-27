// 参数默认值
/* function add(x, y) {
  x = x || 10;
  y = y || 20;
  return x + y;
} */

function add(x = 10, y = 20) {
  console.log([...arguments]);
  console.log(add.length);
  return x + y;
}
// 如果赋值的参数不在第一位，可用 undefined 占位
console.log(add(undefined, 2));
