{
  ('use strict');

  class Recruitment {
    constructor() {
      this.navLi = document.querySelectorAll('.nav li');
      this.listGroup = document.querySelector('.list-group');
      this.pagination = document.querySelector('.pagination');
      this.pageView = 5;
      this.init();
    }
    init() {
      this.renderList({
        type: 'society',
        page: 0
      });
      this.listenHash();
    }
    renderList(props) {
      const { page, type } = props;
      const start = page * this.pageView;
      const end = (page + 1) * this.pageView;
      const newData = data[type].filter(
        (item, index) => index >= start && index < end
      );
      let html = '';

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

      this.listGroup.innerHTML = html;
      this.renderPagination(props);
    }
    renderPagination(props) {
      const { page, type } = props;
      const totalPage = Math.ceil(data[type].length / this.pageView);
      const recruitType = data[type][0].type;
      let html = '';

      for (let i = 0; i < totalPage; i++) {
        html += `
          <li class="${page === i && 'active'}">
            <a href="#/${recruitType}/${i}">${i + 1}</a>
          </li>
        `;
      }

      this.pagination.innerHTML = html;
    }
    renderDetails(props) {
      const { type, id } = props;
      const currentData = data[type].find(item => item.id === id);
      this.listGroup.innerHTML = `
        <div class="panel panel-default">
          <div class="panel-heading">招聘岗位：${currentData.job}</div>
          <div class="panel-body">
              <p>${currentData.ask}</p>
              <p>招聘人数：${currentData.nub}人</p>
              <p>发布时间：${currentData.date}</p>
          </div>
        </div>
      `;
      this.pagination.innerHTML = '';
    }
    listenHash() {
      window.addEventListener('hashchange', () => {
        const hash = window.location.hash.substring(2).split('/');
        const page = parseInt(hash[1]) || 0;

        Array.from(this.navLi).forEach(item => {
          item.classList.remove('active');
        });

        if (hash[0] === 'sh') {
          this.navLi[0].classList.add('active');

          if (hash[1] === 'details') {
            this.renderDetails({
              type: 'society',
              id: parseInt(hash[2])
            });
          } else {
            this.renderList({
              type: 'society',
              page: page
            });
          }
        } else if (hash[0] === 'xy') {
          this.navLi[1].classList.add('active');

          if (hash[1] === 'details') {
            this.renderDetails({
              type: 'campus',
              id: parseInt(hash[2])
            });
          } else {
            this.renderList({
              type: 'campus',
              page: page
            });
          }
        }
      });
    }
  }

  new Recruitment();
}
