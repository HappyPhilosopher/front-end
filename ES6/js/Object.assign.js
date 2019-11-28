// Object.assign() 是浅拷贝
/* const target = {};
const source = { a: 4, b: 5 };
Object.assign(target, source);
source['c'] = 6;
console.log(target); */

// 深拷贝
/* function deepClone(obj) {
  const newObj = obj instanceof Array ? [] : {};

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (obj[key] && typeof obj[key] === 'object') {
        newObj[key] = deepClone(obj[key]);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  return newObj;
}

const obj = {
  a: 1,
  b: 2,
  c: {
    d: {
      e: 3
    }
  }
};

const obj2 = deepClone(obj);
console.log(obj2); */

const newObj = {
  a: 1,
  b: 2
};
const obj = {
  a: undefined,
  b: null
};
Object.assign(newObj, obj);
console.log(newObj);
