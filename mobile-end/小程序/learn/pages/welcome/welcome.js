Page({
  onTap() {
    // 页面跳转
    // 增加 tabBar 后，不能再使用 wx.redirectTo() 和 wx.navigateTo()，只能使用 wx.switchTab()
    /* wx.redirectTo({
      url: '/pages/posts/posts',
      success() {
        console.log('jump success');
      },
      complete() {
        console.log('complete');
      }
    }); */

    // 页面重定向
    // 重定向时，当前页面销毁，会触发 onunload 事件
    // 重定向后的页面无返回按钮
    /* wx.redirectTo({
      url: '/pages/posts/posts',
      success() {
        console.log('重定向成功！');
      }
    }); */

    wx.switchTab({
      url: '/pages/posts/posts'
    });
  },
  onLoad() {
    // 1s 后自动跳转到新闻页面
    /* setTimeout(() => {
      wx.redirectTo({
        url: '/pages/posts/posts'
      });
    }, 1000); */
  },
  // 页面跳转触发 onHide 事件
  onHide() {
    console.log('hide');
  },
  // 重定向触发 onUnload 事件
  onUnload() {
    console.log('unload');
  }
});
