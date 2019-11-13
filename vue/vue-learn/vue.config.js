module.exports = {
  devServer: {
    proxy: {
      '/users': {
        target: 'http://localhost:8888',
        changeOrigin: true
      }
    }
  }
};