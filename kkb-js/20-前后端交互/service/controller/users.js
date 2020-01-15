const users = [
  {
    name: 'zhangsan',
    age: 18
  },
  {
    name: 'lisi',
    age: 19
  }
];

class User {
  async find(ctx) {
    ctx.body = users;
  }
}

module.exports = new User();
