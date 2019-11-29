/* const reg = /a/g;
const str = 'abc_abc_abc';

while (true) {
  const match = reg.exec(str);
  if (!match) {
    break;
  }
  console.log(`#${match.index}: ${match[0]}`);
} */

/* let str = 'hello wrold';
const reg = /(\w+)\s+(\w+)/;
str = str.replace(reg, '$2 $1');
console.log(str); */

/* function getQuerystring(str) {
  const reg = new RegExp(`(^|&)${str}=([^&]*)(&|$)`);
  const result = window.location.search.substring(1).match(reg);
  return result && result[2] ? decodeURIComponent(result[2]) : null;
}
// console.log(getQuerystring('name'));
console.log(getQuerystring('age')); */

// console.log(/[abc]/.test('apple'));
// console.log(/a|b|c/.test('apple'));

var str = 'aaa_aa_a';
// var r1 = /a+/g;
const r2 = /a+/y;

// var result = r1.exec(str);
// console.log(`${result}---${result.index}`);

// var result2 = r1.exec(str);
// console.log(`${result2}---${result2.index}`);

// var result3 = r1.exec(str);
// console.log(`${result3}---${result3.index}`);

// var result4 = r1.exec(str);
// console.log(`${result4}`);

/* while (true) {
  const result = r1.exec(str);
  if (!result) {
    break;
  }
  console.log(`${result} --- ${result.index} --- ${r1.lastIndex}`);
} */

// y 修饰符表示粘连修饰符，每次匹配必须从匹配位置的第一位开始匹配，如果第一位不满足匹配规则，返回 null
/* console.log(r1.exec(str)); // aaa
console.log(r2.exec(str)); // aaa

console.log(r1.exec(str)); // aa
console.log(r2.exec(str)); // null */

r2.lastIndex = 3;
console.log(r2.exec(str)); // null

r2.lastIndex = 4;
console.log(r2.exec(str)); // aa
