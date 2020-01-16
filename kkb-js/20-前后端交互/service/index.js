const Koa = require('koa');
const static = require('koa-static');
const cors = require('koa2-cors');
const koaBody = require('koa-body');
const path = require('path');
const app = new Koa();
const routing = require('./routes');

// 处理静态文件
app.use(static(path.join(__dirname, './static')));

// 处理跨域
app.use(cors());

// 处理 POST 请求
app.use(
  koaBody({
    multipart: true,
    formidable: {
      uploadDir: path.join(__dirname, './static/uploads'),
      keepExtensions: true
    }
  })
);

// 处理路由
routing(app);

// 开启服务
app.listen(3000, () => {
  console.log('server is running...');
});
