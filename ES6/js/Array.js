// for 循环
const arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === 3) {
//     // break;
//     continue;
//   }
//   console.log(arr[i]);
// }

// Array.prototype.forEach
// arr.forEach(item => {
//   console.log(item);
// });

// Array.prototype.every
// arr.every(item => {
//   if (item === 2) {
//     // do nothing
//   } else {
//     console.log(item);
//   }
//   return true;
// });

// for-in
// arr.a = 8;
for (const key in arr) {
  if (key === '2') {
    continue;
  }
  console.log(key + ' --- ' + arr[key]);
}

// for-of
// todo...
