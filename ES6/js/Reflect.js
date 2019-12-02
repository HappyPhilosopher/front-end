// console.log(Math.floor.apply(null, [3.2]));
// console.log(Reflect.apply(Math.floor, null, [4.5]));
/* class Person {
  constructor(name) {
    this.name = name;
  }
}
const p = new Person('zhangsan');
console.log(Reflect.getPrototypeOf(p) === Person.prototype); */

/* let price = 101.5;
if (price > 100) {
  price = Reflect.apply(Math.ceil, null, [price]);
} else {
  price = Reflect.apply(Math.floor, null, [price]);
}
console.log(price); */

/* const d = Reflect.construct(Date, []);
console.log(d.getTime()); */

/* const student = {};

Reflect.defineProperty(student, 'name', {
  value: 'zhangsan'
});

console.log(student.name); */

/* const obj = { x: 1, y: 2 };
// Reflect.deleteProperty(obj, 'x');
// console.log(obj);
// console.log(Reflect.get(obj, 'x'));
console.log(Reflect.getOwnPropertyDescriptor(obj, 'x')); */

/* const d = new Date();
console.log(Reflect.getPrototypeOf(d)); */

/* const obj = { x: 1, y: 2 };
// console.log(Reflect.has(obj, 'x'));
// console.log(Reflect.has(obj, 'z'));
// Object.freeze(obj);
// console.log(Reflect.isExtensible(obj));
// console.log(Reflect.ownKeys(obj));
// Reflect.preventExtensions(obj);
// console.log(Reflect.isExtensible(obj));
// Reflect.set(obj, 'z', 4);
// console.log(obj.z);
// console.log(Reflect.get(obj, 'x'));
console.log(Reflect.deleteProperty(obj, 'x'), obj); */

// console.log(Reflect.apply(Math.floor, null, [1.72]));

/* function getName() {
  return this.name;
}

const obj = {
  name: 'zhangsan'
};

// 如果没有参数，需要传递空数组[]
console.log(Reflect.apply(getName, obj, [])); */

/* class Animal {
  constructor(type) {
    this.type = type;
  }
  eat() {
    console.log('I can eat.');
  }
}

const cat = Reflect.construct(Animal, ['cat']);
console.log(cat.type);
cat.eat(); */

/* const obj = {
  foo: 1,
  bar: 2,
  get baz() {
    return this.foo + this.bar;
  }
};

const myObj = {
  foo: 4,
  bar: 5
};

console.log(Reflect.get(obj, 'foo'));
console.log(Reflect.get(obj, 'bar'));
console.log(Reflect.get(obj, 'baz'));
console.log(Reflect.get(obj, 'baz', myObj)); */

/* const obj = {
  foo: 1,
  bar(value) {
    return value;
  }
};

Reflect.set(obj, 'bar', 2);
console.log(obj.bar); */

const p = {
  a: 'a'
};

const handler = {
  set(target, key, value, receiver) {
    console.log('set');
    Reflect.set(target, key, value);
  },
  defineProperty(target, key, descriptor) {
    console.log('defineProperty');
    Reflect.defineProperty(target, key, descriptor);
  }
};

const proxy = new Proxy(p, handler);
Reflect.set(proxy, 'a', 'A');
console.log(proxy);
console.log(Reflect.has(p, 'a'));
console.log(Reflect.deleteProperty(p, 'b'));
console.log(p);
