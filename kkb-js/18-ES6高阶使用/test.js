const reg = /\{\{(.*)\}\}/;
const str = '{{ aaa }}'.replace(/\s*/g, '');
console.log(str.match(reg)[1]);