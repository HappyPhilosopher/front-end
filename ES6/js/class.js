// class 中私有属性的读写
// 私有属性，ES6 目前没有提供直接的私有属性，所以将私有属性定义在 class 外
/* let _age = 4;

class Animal {
  constructor(type) {
    this.type = type;
  }
  // get 方法可以设置属性为只读
  get age() {
    return _age;
  }
  // set 方法可设置属性为可写
  set age(val) {
    _age = val;
  }
  eat() {
    console.log('I am eating food.');
  }
}

const dog = new Animal('dog');
dog.age = 5;
console.log(dog.age); */

// 静态方法，使用 static 标明该方法为静态的
class Animal {
  constructor(type) {
    this.type = type;
  }
  static walk() {
    console.log('I am walking.');
  }
  eat() {
    // 调用静态方法
    Animal.walk();
    console.log('I am eating food.');
  }
}

// const dog =
// dog.walk();  // 实例无法调用到静态方法

// 继承
class Dog extends Animal {
  constructor(type, name) {
    super(type);
    this.name = name;
  }
}

const doudou = new Dog('dog', 'doudou');
doudou.eat();
