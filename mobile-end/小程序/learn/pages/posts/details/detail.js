const { postList } = require('../../../data/posts-data');

Page({
  onLoad(options) {
    // options.id 是 String 类型，需要转换为 Number 类型
    const detail = postList.find(item => item.postId === parseInt(options.id));
    this.setData({
      detail
    });
  }
});
