(function() {
  'use strict';
  class Nav {
    constructor(options) {
      this.firstNavs = document.querySelectorAll(options.first);
      this.secondNavs = document.querySelectorAll(options.second);
      this.timer = null;
      this.prevIndex = 0;
      this.control();
    }
    control() {
      Array.from(this.firstNavs).forEach((el, index) => {
        el.addEventListener('mouseenter', () => {
          clearInterval(this.timer);

          this.firstNavs[this.prevIndex].classList.remove('active');
          this.firstNavs[index].classList.add('active');
          this.secondNavs[this.prevIndex].style.display = 'none';
          this.secondNavs[index].style.display = 'block';

          this.prevIndex = index;
        });

        el.addEventListener('mouseleave', () => {
          this.hideSecondNav(index);
        });
      });

      Array.from(this.secondNavs).forEach((el, index) => {
        el.addEventListener('mouseenter', () => {
          clearInterval(this.timer);
        });

        el.addEventListener('mouseleave', () => {
          this.hideSecondNav(index);
        });
      });
    }
    hideSecondNav(index) {
      this.timer = setInterval(() => {
        this.secondNavs[index].style.display = 'none';
      }, 300);
    }
  }

  new Nav({
    first: '.normal',
    second: '.float_layer'
  });
})();
