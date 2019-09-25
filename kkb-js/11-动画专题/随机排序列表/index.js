(function() {
  'use strict';

  const data = [
    {
      id: 1,
      title: '1-温馨办公',
      src: 'images/1.png'
    },
    {
      id: 2,
      title: '2-游戏桌面',
      src: 'images/2.png'
    },
    {
      id: 3,
      title: '3-汽车摇滚',
      src: 'images/3.png'
    },
    {
      id: 4,
      title: '4-狭路相逢',
      src: 'images/4.png'
    },
    {
      id: 5,
      title: '5-棒球小子',
      src: 'images/5.png'
    },
    {
      id: 6,
      title: '6-球鞋动力',
      src: 'images/6.png'
    },
    {
      id: 7,
      title: '7-游戏官网',
      src: 'images/7.png'
    },
    {
      id: 8,
      title: '8-指尖社区',
      src: 'images/8.png'
    }
  ];
  const list = document.querySelector('#list');
  const navs = document.querySelectorAll('.nav a');
  let flag = true;
  let content = '';

  function render(item) {
    content += `
      <li>
        <img src="${item.src}">
        <p>${item.title}</p>
      </li>
    `;
    list.innerHTML = content;
  }

  // 从大到小/从小到大排列
  navs[0].addEventListener('click', function() {
    if (flag) {
      this.innerHTML = '从小到大';
      data.sort((acc, cur) => cur.id - acc.id).forEach(render);
      content = '';
    } else {
      this.innerHTML = '从大到小';
      data.sort((acc, cur) => acc.id - cur.id).forEach(render);
      content = '';
    }

    flag = !flag;
  });

  // 随机排序
  navs[1].addEventListener('click', function() {
    data.sort(() => Math.random() - 0.5).forEach(render);
    content = '';
  });
})();
