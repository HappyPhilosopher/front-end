(function() {
  'use strict';

  const listGroup = document.querySelector('.list-group');
  const navLinks = document.querySelectorAll('.nav a');
  const pagination = document.querySelector('.pagination');

  /**
   * 刷新时保持导航按钮类名
   */
  const keepNavClassName = () => {
    const hashValue = window.location.hash.substring(2).split('/');

    // 清空导航按钮的 active 类名
    Array.from(navLinks).forEach(item => {
      item.parentNode.classList.remove('active');
    });

    if (hashValue && hashValue[0]) {
      if (hashValue[0] === 'sh') {
        navLinks[0].parentNode.classList.add('active');
      } else if (hashValue[0] === 'xy') {
        navLinks[1].parentNode.classList.add('active');
      }
    } else {
      navLinks[0].parentNode.classList.add('active');
    }
  };

  /**
   * 渲染分页器
   * @param {Object} props 包含类型、页数的对象
   */
  const renderPagination = props => {
    const { type, page } = props;
    const pageView = 5;
    const totalPage = Math.ceil(data[type].length / pageView);
    let html = '';

    for (let i = 0; i < totalPage; i++) {
      html += `
        <li class="${page === i && 'active'}"><a href="#/${
        data[type][0].type
      }/${i}">${i + 1}</a></li>
      `;
    }

    pagination.innerHTML = html;
  };

  /**
   * 渲染数据列表
   * @param {Object} props 包含类型、页数的对象
   */
  const renderList = props => {
    let html = '';
    const { type, page } = props;
    const pageView = 5;
    const start = page * pageView;
    const end = (page + 1) * pageView;
    const newData = data[type].filter(
      (item, index) => index >= start && index < end
    );

    newData.forEach(item => {
      html += `
        <li class="list-group-item">
          <a href="#/${item.type}/details/${item.id}">
            <h4 class="list-group-item-heading">职位需求：${item.job} 需求人数：${item.nub}名</h4>
            <p class="list-group-item-text">${item.ask}</p>
          </a>
        </li>
      `;
    });

    listGroup.innerHTML = html;
    renderPagination(props);
  };

  const renderDetail = props => {
    const { type, id } = props;
    const newData = data[type].find(item => item.id == id);
    listGroup.innerHTML = `
      <div class="panel panel-default">
        <div class="panel-heading">招聘岗位：${newData.job}</div>
        <div class="panel-body">
            <p>${newData.ask}</p>
            <p>招聘人数：${newData.nub}人</p>
            <p>发布时间：${newData.date}</p>
        </div>
      </div>
    `;
    pagination.innerHTML = '';
  };

  // 初始化页面
  renderList({
    type: 'society',
    page: 0
  });

  keepNavClassName();

  // 通过 hash 值的变化，渲染不同的结果
  window.addEventListener('hashchange', function() {
    const hashValue = window.location.hash.substring(2).split('/');
    const type = hashValue[0];

    // 清空导航按钮的 active 类名
    Array.from(navLinks).forEach(item => {
      item.parentNode.classList.remove('active');
    });

    switch (type) {
      case 'sh':
        // 为当前按钮添加 active
        navLinks[0].parentNode.classList.add('active');

        if (hashValue[1] === 'details') {
          renderDetail({
            type: 'society',
            id: parseInt(hashValue[2])
          });
        } else {
          const page = parseInt(hashValue[1]) || 0;

          // 渲染数据列表
          renderList({
            type: 'society',
            page: page
          });
        }
        break;

      case 'xy':
        // 为当前按钮添加 active
        navLinks[1].parentNode.classList.add('active');

        if (hashValue[1] === 'details') {
          renderDetail({
            type: 'campus',
            id: parseInt(hashValue[2])
          });
        } else {
          const page = parseInt(hashValue[1]) || 0;

          // 渲染数据列表
          renderList({
            type: 'campus',
            page: page
          });
        }
        break;
    }
  });
})();
