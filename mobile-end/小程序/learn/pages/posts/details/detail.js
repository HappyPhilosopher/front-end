const { postList } = require('../../../data/posts-data');

Page({
  data: {},
  onLoad(options) {
    // options.id 是 String 类型，需要转换为 Number 类型
    const articleId = parseInt(options.id);
    const detail = postList.find(item => item.postId === articleId);
    // 先获取缓存数据，存在就调用，不存在就赋值
    let collectedType = wx.getStorageSync(`article${articleId}`);
    collectedType = collectedType ? collectedType : { isCollected: false };
    // 将缓存数据赋值给模板数据
    this.setData({
      detail: Object.assign(detail, collectedType)
    });
  },
  collection() {
    // 修改模板数据
    /* this.setData({
      detail: Object.assign(this.data.detail, {
        isCollected: !this.data.detail.isCollected
      })
    }); */
    // 交互反馈
    /* wx.showToast({
      title: this.data.detail.isCollected ? '收藏成功' : '取消成功'
    }); */
    const _this = this;
    wx.showModal({
      // title: '收藏',
      content: this.data.detail.isCollected ? '是否取消收藏' : '是否收藏',
      success(res) {
        if (res.confirm) {
          _this.setData({
            detail: Object.assign(_this.data.detail, {
              isCollected: !_this.data.detail.isCollected
            })
          });
          wx.setStorageSync(`article${_this.options.id}`, _this.data.detail);
        } else {
          return;
        }
      }
    });
    // 将新的模板数据进行缓存
    // wx.setStorageSync(`article${this.options.id}`, this.data.detail);
  },
  share() {}
});
