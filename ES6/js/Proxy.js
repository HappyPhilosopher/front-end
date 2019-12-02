/* const girl = {
  name: 'xiaohua',
  age: 25
};

const handler = {
  get(target, key) {
    if (key === 'age') {
      return 18;
    } else {
      return Reflect.get(target, key);
    }
  }
};

const proxy = new Proxy(girl, handler);
console.log(proxy.age);
console.log(proxy.name); */

/* const girl = {
  name: 'xiaohua'
};

const handler = {
  get(target, key) {
    if (Reflect.has(target, key)) {
      return target[key];
    } else {
      throw new ReferenceError(`Property ${key} does not exist.`);
    }
  }
};

const p = new Proxy(girl, handler);
// console.log(p.name);
// console.log(p.age);

const newGirl = Object.create(p);
console.log(newGirl.name);
console.log(newGirl.age); */

/* const o = {
  name: 'xiaoming',
  price: 190
};

const d = new Proxy(o, {
  get(target, key) {
    if (key === 'price') {
      return 1.3 * target[key];
    } else {
      return target[key];
    }
  }
});

console.log(d.price); */

/* const arr = [1, 5, 2, 3, 4];

const newArr = new Proxy(arr, {
  get(target, key) {
    return target[key];
  },
  set(target, key, value) {
    // 让代理数据只读
    return false;
  }
});

newArr.sort();
console.log(arr + ' --- ' + newArr); */

/* // 检测错误，上报错误缘由
window.addEventListener(
  'error',
  e => {
    console.log(e.message);
    // TODO...
  },
  true
);

const o = {
  name: 'xiaoming',
  price: 190
};

const validator = (target, key, value) => {
  // 禁止破坏原有数据结构（增删属性）
  if (Reflect.has(target, key)) {
    // 如果 price 大于 300，禁止；反之则通过。除了 price 属性外，随意设置
    if (key === 'price') {
      if (value > 300) {
        throw new TypeError('price exceed 300');
        // return false;
      } else {
        target[key] = value;
      }
    } else {
      target[key] = value;
    }
  } else {
    throw new TypeError('can not modify this data');
    // return false;
  }
};

const handler = {
  get(target, key) {
    // 如果没有该属性，返回空字符（默认返回 undefined）
    return target[key] || '';
  },
  set: validator
};

const d = new Proxy(o, handler);
// d.price = 301;
d.price = 200;
// d.age = 18;
d.name = 'lilei';
console.log(d.name, d.price); */

// 每次生成组件都会有一个唯一的、随机的、不可改变的 id
/* class Component {
  constructor() {
    this.proxy = new Proxy(
      {
        // 随机数转化为 32 进制并截取后 8 位
        id: Math.random()
          .toString(32)
          .slice(-8)
      },
      {}
    );
  }
  get id() {
    return this.proxy.id;
  }
}

const com1 = new Component();
const com2 = new Component();

for (let i = 0; i < 10; i++) {
  console.log(com1.id, com2.id);
}

com1.id = 'abc';
console.log(com1.id, com2.id); */

// 撤销代理操作
/* const o = {
  name: 'zhangsan'
};

const p = Proxy.revocable(o, {
  get(target, key) {
    return target[key];
  }
});

setTimeout(() => {
  console.log(p.proxy.name);
  setTimeout(() => {
    p.revoke();
    console.log(p.proxy.name);
  }, 1000);
}, 1000); */

// 有一段文字，撤销后便再无法阅读
const data = {
  words: 'This is the words'
};

function createElement(type, id, text) {
  const ele = document.createElement(type);
  ele.id = id;
  ele.innerHTML = text;
  document.body.appendChild(ele);
}

createElement('button', 'read', 'read');
createElement('button', 'revoke', 'revoke');

const proxyData = Proxy.revocable(data, {
  get(target, key) {
    return target[key];
  }
});

document.querySelector('#read').addEventListener('click', function() {
  createElement('p', '', proxyData.proxy.words);
});

document.querySelector('#revoke').addEventListener('click', function() {
  proxyData.revoke();
  document.querySelector('p').innerHTML = '';
});
