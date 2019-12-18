// 根目录是 /pages 所以无法使用绝对定位获取数据
const { postList } = require('../../data/posts-data');

Page({
  /**
   * 页面的初始数据
   */
  data: {},
  showDetail(e) {
    const postId = e.currentTarget.dataset.detail;
    wx.navigateTo({
      url: `./details/detail?id=${postId}`
    });
  },
  onLoad() {
    this.setData({
      postList
    });
  }
});
