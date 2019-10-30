(function(win, undefined) {
  /**
   * 函数内部也可以直接使用 window 作为顶部对象，为什么要传参呢？
   * 1、因为作用域关系，如果不传参而在函数内部直接使用 window 作为顶部对象，则会先在函数内部查找 window 对象,
   *    如果没找到，才会去作用域外查找，降低了性能。
   * 2、形参可以直接被压缩软件进行压缩，而直接使用 window 对象则不可压缩。如上代码的 win
   */
  win.jQuery = win.$ = jQuery;

  /**
   * undefined 参数有什么意义？
   * 在高级浏览器中，undefined 不可再赋值，但是在 IE8 及以下的 IE 浏览器中，可以给 undefined 赋值。
   * 所以，在此处传递 undefined 可以防止低级浏览器中被修改
   * 详情见 “undefined在不同浏览器的表现.html”
   */
})(window);
