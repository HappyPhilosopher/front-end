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

const obj = { x: 1, y: 2 };
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
console.log(Reflect.deleteProperty(obj, 'x'), obj);
