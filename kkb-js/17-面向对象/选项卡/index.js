'use strict';

{
  class Tab {
    constructor(el) {
      this.el = document.querySelector(el)
      this.btns = this.el.querySelectorAll('.btn');
      this.views = this.el.querySelectorAll('.view');
      this.currentIndex = 0;
      this.prevIndex = 0;
      this.init();
    }
    init() {
      Array.from(this.btns).forEach((item, index) => {
        item.addEventListener('click', () => {
          this.currentIndex = index;
          this.tab();
          this.prevIndex = index;
        });
      });
    }
    tab() {
      this.btns[this.currentIndex].classList.add('active');
      this.btns[this.prevIndex].classList.remove('active');
      this.views[this.currentIndex].classList.add('show');
      this.views[this.prevIndex].classList.remove('show');
    }
  }

  class AutoTab extends Tab {
    constructor(el) {
      super(el);
    }
    autoplay() {
      setInterval(() => {
        this.currentIndex += 1;
        this.currentIndex = this.currentIndex % this.btns.length;
        this.tab();
        this.prevIndex = this.currentIndex;
      }, 1000);
    }
  }

  const tab1 = new Tab('.container1');
  const tab2 = new AutoTab('.container2');
  tab2.autoplay();
}
