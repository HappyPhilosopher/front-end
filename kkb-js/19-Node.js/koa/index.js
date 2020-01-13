const Koa = require('koa');
const static = require('koa-static');
const views = require('koa-views');
const app = new Koa();
const routing = require('./routes');

// 解析模板
app.use(
  views(__dirname + '/views', {
    map: {
      html: 'ejs'
    }
  })
);

// 静态文件解析
app.use(static(__dirname + '/static'));

// 路由解析
routing(app);

// 开启服务
app.listen(3000, () => {
  console.log('server is running...');
});
