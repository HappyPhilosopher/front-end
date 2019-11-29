const o = {
  name: 'xiaoming',
  age: 18
};

const p = new Proxy(o, {
  get(target, key) {
    if (key === 'age') {
      return target[key] - 2;
    } else {
      return target[key];
    }
  }
});

console.log(p.age, p.name);
