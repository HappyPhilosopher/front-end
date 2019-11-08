const proto = new Proxy(
  {},
  {
    get(target, key, value) {
      console.log(`GET ${key}`);
      return target[key];
    }
  }
);

const obj = Object.create(proto);
obj.foo;
