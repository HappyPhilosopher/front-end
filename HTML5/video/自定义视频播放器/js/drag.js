class Drag {
  constructor(el) {
    this.el = document.querySelector(el);
    this.down();
  }
  down() {
    this.el.onmousedown = e => {
      const initX = parseInt(window.getComputedStyle(this.el)['left']);
      const startX = e.clientX;

      this.move(initX, startX);
      this.up();
    };
  }
  move(initX, startX) {
    document.onmousemove = e => {
      e.preventDefault();
      const endX = e.clientX;
      const posX = endX - startX + initX;
      this.setStyle(posX);
    };
  }
  setStyle(posX) {
    this.el.style.left = posX + 'px';
  }
  up() {
    document.onmouseup = () => {
      document.onmousemove = null;
    };
  }
}
