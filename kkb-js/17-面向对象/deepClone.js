function deepClone(obj) {
  const newObj = obj.constructor === Array ? [] : {};
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
  name: 'Mike',
  age: 20,
  hobby: {
    color: 'red'
  }
};
const newObj = deepClone(obj);

const arr = [1, 2, 3, { name: 'Jack' }];
const newArr = deepClone(arr);
console.log(newObj, arr);
