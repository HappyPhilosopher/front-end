(function(win) {
  // 21-94行，定义变量和函数

  // jquery = function() {}

  // 96-277 给 jQuery 添加属性和方法
  jQuery.fn = jQuery.prototype = {
    jquery: '版本',
    constructor: '修正指向问题',
    init: function() {
      '初始化和参数管理'
    }
  };
  
  // 282-342 extend: jq 的继承方法
  // 344-798 jQuery.extend: 扩展一些工具方法
  // 857-2714 Sizzle CSS 选择器方法
  // 2750-2912 callbacks: 回调对象，函数的统一管理
  // 2913-3052 Deferred：延迟对象，对异步的统一管理
  // 3053-3168 support: 功能检测
  // 3181-3514 Data()：数据缓存
  // 3515-3657 queue(): 队列管理
  // 3662-4139 元素属性操作
  // 4145-4933 事件操作
  // 4935-5831 DOM 操作
  // 5832-6375 CSS()：样式操作
  // 6376-7585 提交数据和 ajax() 方法
  // 7586-8302  animation(): 运动
  // 8303-8527 位置和尺寸操作
  // 8530-8550 模块化方法
  // 8555行 win.jQuery = win.$ = jquery
})(window);
