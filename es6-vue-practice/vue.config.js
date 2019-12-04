const sort = require('./src/mock/sort.json');

module.exports = {
  devServer: {
    port: 8080,
    before(app) {
      app.get('/api/sort', (req, res) => {
        res.json(sort);
      });
    }
  }
};
