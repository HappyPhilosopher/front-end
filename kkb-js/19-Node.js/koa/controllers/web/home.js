const fs = require('fs');
const path = require('path');

class Home {
  async index(ctx) {
    const data = JSON.parse(
      fs.readFileSync(path.join(__dirname, '../../static/data.json'))
    );
    const pageView = 5;
    const page = parseInt(ctx.query.page) || 0;
    const startItem = pageView * page;
    const endItem = pageView * (page + 1);
    const filterItems = data.filter(
      (item, index) => index >= startItem && index < endItem
    );
    const totalPages = Math.ceil(data.length / pageView);
    await ctx.render('index.ejs', {
      filterItems,
      totalPages,
      page
    });
  }
}

module.exports = new Home();
