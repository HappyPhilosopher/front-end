const users = [{ username: '张三', age: 20 }, { username: '李四', age: 22 }];

class Users {
  async find(ctx) {
    ctx.body = users;
  }
  async findAge(ctx) {
    ctx.body = users.find(user => user.username === ctx.params.name).age;
  }
}

module.exports = new Users();
