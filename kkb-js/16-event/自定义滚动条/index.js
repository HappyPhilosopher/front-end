'use strict';
{
  const arr = [
    '河北',
    '山西',
    '辽宁',
    '吉林',
    '黑龙江',
    '江苏',
    '浙江',
    '安徽',
    '福建',
    '江西',
    '山东',
    '河南',
    '湖北',
    '湖南',
    '广东',
    '海南',
    '四川',
    '贵州',
    '云南',
    '陕西',
    '甘肃',
    '青海',
    '台湾',
    '北京',
    '天津',
    '上海',
    '重庆'
  ];
  const wrap = document.querySelector('.wrap');
  const list = wrap.querySelector('.list');
  const scrollWrap = wrap.querySelector('.scroll-wrap');
  const scroll = scrollWrap.querySelector('.scroll');

  /**
   * 获取/设置元素的属性值
   * @param {Object} el DOM 元素
   * @param {String} attr 元素属性（只限长度属性）
   * @param {Number} val 属性值
   */
  function css(el, attr, val) {
    if (arguments.length === 3) {
      el.style[attr] = val + 'px';
    } else {
      return parseInt(getComputedStyle(el)[attr]);
    }
  }

  /**
   * 渲染列表数据
   * @param {Array} arr 需要渲染的数据
   */
  const renderList = arr => {
    let html = '';
    arr.forEach(item => {
      html += `
        <li>${item}</li>
      `;
    });
    list.innerHTML = html;
  };

  const scrollFn = (el, upFn, downFn) => {
    // Chrome
    el.addEventListener('mousewheel', function(e) {
      e.preventDefault();
      
      if (e.wheelDelta > 0) {
        upFn && upFn();
      } else {
        downFn && downFn();
      }
    });

    // Firefox
    el.addEventListener('DOMMouseScroll', function(e) {
      e.preventDefault();
      
      if (e.detail < 0) {
        upFn && upFn();
      } else {
        downFn && downFn();
      }
    });
  };

  renderList(arr);

  // 设置滚动条高度 wrap / list = scroll / scrollWrap
  const wrapH = css(wrap, 'height');
  const listH = css(list, 'height');
  const scrollWrapH = css(scrollWrap, 'height');
  css(scroll, 'height', (wrapH / listH) * scrollWrapH);

  // 滚动条拖拽
  scroll.addEventListener('mousedown', function(e) {
    const firstClickY = e.clientY;
    const startY = css(scroll, 'top');

    function moveFn(e) {
      e.preventDefault();

      const secondClickY = e.clientY;
      const maxScroll = scrollWrapH - css(scroll, 'height');
      let posY = secondClickY - firstClickY + startY;
      posY = Math.max(0, posY);
      posY = Math.min(posY, maxScroll);
      scroll.style.top = posY + 'px';

      // 内容按比例滚动
      const scale = posY / maxScroll;
      list.style.top = -scale * (listH - wrapH) + 'px';
    }

    document.addEventListener('mousemove', moveFn);

    document.addEventListener(
      'mouseup',
      function() {
        document.removeEventListener('mousemove', moveFn);
      },
      { once: true }
    );
  });

  // 列表滚动
  scrollFn(wrap, function() {
    const maxScroll = scrollWrapH - css(scroll, 'height');
    let posY = css(scroll, 'top') - 10;
    const scale = posY / maxScroll;
    posY = Math.max(posY, 0);
    scroll.style.top = posY + 'px';
    list.style.top = -scale * (listH - wrapH) + 'px';
  }, function() {
    const maxScroll = scrollWrapH - css(scroll, 'height');
    let posY = css(scroll, 'top') + 10;
    const scale = posY / maxScroll;
    posY = Math.min(posY, maxScroll);
    scroll.style.top = posY + 'px';
    list.style.top = -scale * (listH - wrapH) + 'px';
  });
}
