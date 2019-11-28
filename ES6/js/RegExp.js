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

console.log(/[abc]/.test('apple'));
console.log(/a|b|c/.test('apple'));
