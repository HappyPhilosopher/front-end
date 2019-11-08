const person = {
  name: '张三'
};

const proxy = new Proxy(person, {
  get(target, property) {
    if (target.hasOwnProperty(property)) {
      console.log(target[property]);
    } else {
      throw new Error(`Property does not exist.`);
    }
  }
});

proxy.name;
proxy.age;
