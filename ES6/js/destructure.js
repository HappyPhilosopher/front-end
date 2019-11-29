/* const obj = {
  city: {
    name: 'shanghai'
  }
};

const { city } = obj;
const { name } = city;
console.log(name); */

/* const obj = {
  name: 'zhangsan',
  age: 18
};

const { name, age } = obj;
console.log(name, age); */

// 只想取得数组中某项值，其他项可用空格代替
/* const arr = [1, 2, 3, 4];
const [a, , c] = arr;
console.log(a, c); */

/* const [a, , c] = new Set(['a', 'b', 'c', 'd']);
console.log(a, c); */

// 修改对象属性值
/* const obj = {
  user: '1',
  age: 'a'
};
[obj.user, obj.age] = ['zhangsan', 18];
console.log(obj); */

// 使用 Object.entries() 将对象变为可遍历
/* const obj = {
  name: 'zhangsan',
  age: 20
};
for (const [k, v] of Object.entries(obj)) {
  console.log(k, v);
} */

// rest 参数
/* const arr = [1, 2, 3, 4, 5, 6, 7];
const [a, b, ...rest] = arr;
console.log(a, b, rest); */

/* const [{ name }] = [
  {
    name: 'zhangsna'
  }
];

console.log(name); */

/* const obj = {
  title: 'destructor',
  width: '100px'
};
const { title: til, width } = obj;
console.log(til, width); */

// 嵌套数据结构
const options = {
  size: {
    width: 100,
    height: 200
  },
  items: ['cake', 'cafe'],
  extra: true
};

const {
  size: { width, height },
  items: [, item2]
} = options;
console.log(width, height, item2);
