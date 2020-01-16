const path = require('path');

const users = [
  {
    id: 1,
    name: 'zhangsan',
    age: 18
  },
  {
    id: 2,
    name: 'lisi',
    age: 19
  }
];

class User {
  async find(ctx) {
    ctx.body = users;
  }
  async findOne(ctx) {
    const user = users.find(item => item.id === parseInt(ctx.params.id));
    if (!user) {
      ctx.throw(404, 'user is unavailable.');
    }
    ctx.body = user;
  }
  async create(ctx) {
    const { name } = ctx.request.body;
    const repeatUser = users.find(item => item.name === name);
    if (repeatUser) {
      ctx.throw(409, 'user is available.');
    }

    const user = ctx.request.body;
    users.push(ctx.request.body);
    ctx.body = user;
  }
  async update(ctx) {
    let user = users.find(item => item.id === parseInt(ctx.params.id));
    if (!user) {
      ctx.throw(409, 'user is unavaliable.');
    }

    user = Object.assign(user, ctx.request.body);
    ctx.body = user;
  }
  // 上传文件
  upload(ctx) {
    const { file } = ctx.request.files;
    let arr = [];
    Array.from(file).forEach(item => {
      const basename = path.basename(item.path);
      arr.push({
        url: `${ctx.origin}/uploads/${basename}`
      });
    });
    ctx.body = arr;
  }
}

module.exports = new User();
