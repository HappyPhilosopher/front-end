const proxy = new Proxy({}, {
  get(target, property) {
    return 35;
  }
});

console.log(proxy.time);
console.log(proxy.name);
