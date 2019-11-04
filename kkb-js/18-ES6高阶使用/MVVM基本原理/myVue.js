const str = '{{ message }}';
const reg = /\{\{\s*(\S+)\s*\}\}/g;
if (reg.test(str)) {
  console.log(RegExp.$1);
}
