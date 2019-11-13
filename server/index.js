const Koa = require('koa');
const cors = require('koa2-cors');
const app = new Koa();
const routing = require('./routes');

// 跨域
// app.use(cors());

// 启用路由
routing(app);

// 监听端口
app.listen(8888, () => {
  console.log('Server is running at port 8888...');
});
