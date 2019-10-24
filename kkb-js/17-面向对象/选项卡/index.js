'use strict';

{
  class Tab {
    constructor(el) {
      this.btns = document.querySelector(el).querySelectorAll('.btn');
      this.views = document.querySelector(el).querySelectorAll('.view');
      this.prevIndex = 0;
      this.init();
    }
    init() {
      Array.from(this.btns).forEach((item, index) => {
        item.addEventListener('click', () => {
          this.btns[index].classList.add('active');
          this.btns[this.prevIndex].classList.remove('active');
          this.views[index].classList.add('show');
          this.views[this.prevIndex].classList.remove('show');
          this.prevIndex = index;
        });
      });
    }
  }

  const tab1 = new Tab('.container1');
  const tab2 = new Tab('.container2');
}
