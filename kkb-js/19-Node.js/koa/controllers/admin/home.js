class Home {
  index(ctx) {
    ctx.body = 'Hello master';
  }
}

module.exports = new Home();
