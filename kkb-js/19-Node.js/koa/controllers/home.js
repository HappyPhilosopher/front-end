class Home {
  async index(ctx) {
    await ctx.render('index.ejs');
  }
}

module.exports = new Home();
