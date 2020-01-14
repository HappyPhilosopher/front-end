const Koa = require('koa');
const static = require('koa-static');
const views = require('koa-views');
const superagent = require('superagent');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');
const app = new Koa();
const webRouting = require('./routes/web');
const adminRouting = require('./routes/admin');

// 爬取新闻页面内容
superagent.get('http://news.ifeng.com/').end((err, data) => {
  if (err) return;

  const html = data.text;
  const $ = cheerio.load(html);
  let arr = [];
  $('.news-stream-newsStream-news-item-has-image').each((k, v) => {
    arr.push({
      img: $(v)
        .find('img')
        .attr('src'),
      title: $(v)
        .find('.news-stream-newsStream-news-item-title a')
        .text()
    });
  });

  fs.writeFileSync(
    path.join(__dirname, './static/data.json'),
    JSON.stringify(arr)
  );
});

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
webRouting(app);
adminRouting(app);

// 开启服务
app.listen(3000, () => {
  console.log('server is running...');
});
