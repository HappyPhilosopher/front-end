{
  ('use strict');

  class Recruitment {
    constructor() {
      this.navLi = document.querySelector('.nav li');
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
    }
  }

  new Recruitment();
}
