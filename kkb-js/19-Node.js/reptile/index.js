const http = require('https');
const cheerio = require('cheerio');
const fs = require('fs');

const webUrl = 'https://www.ifeng.com/';

http.get(webUrl, req => {
  let str = '';
  req.on('data', chunk => {
    str += chunk;
  });
  req.on('end', () => {
    formatData(str);
  });
});

function formatData(data) {
  const $ = cheerio.load(data);
  let arr = [];
  $('.news_list-3wjAJJJM a').each((k, v) => {
    let obj = {
      title: $(v).text()
    };
    arr.push(obj);
  });
  fs.writeFileSync('data.json', JSON.stringify(arr));
}
