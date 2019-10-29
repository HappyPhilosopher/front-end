'use strict';

{
  class Drag {
    constructor(el) {
      this.el = document.querySelector(el);
      this.downFn();
    }
    downFn() {
      this.el.onmousedown = e => {
        const startPos = {
          l: e.clientX,
          t: e.clientY
        };
        const initPos = {
          l: this.el.getBoundingClientRect().left,
          t: this.el.getBoundingClientRect().top
        };

        this.moveFn(startPos, initPos);
        this.upFn();
      };
    }
    moveFn(startPos, initPos) {
      document.onmousemove = e => {
        e.preventDefault();

        const endPos = {
          l: e.clientX,
          t: e.clientY
        };
        const posX = endPos.l - startPos.l + initPos.l;
        const posY = endPos.t - startPos.t + initPos.t;

        this.setStyle(posX, posY);
      };
    }
    setStyle(posX, posY) {
      this.el.style.left = posX + 'px';
      this.el.style.top = posY + 'px';
    }
    upFn() {
      document.onmouseup = () => {
        document.onmousemove = null;
      };
    }
  }

  class LimitDrag extends Drag {
    constructor(el) {
      super(el);
    }
    setStyle(posX, posY) {
      const clientW = window.innerWidth;
      const clientH = window.innerHeight;
      posX = Math.max(0, posX);
      posX = Math.min(clientW - this.el.getBoundingClientRect().width, posX);
      posY = Math.max(0, posY);
      posY = Math.min(clientH - this.el.getBoundingClientRect().height, posY);

      this.el.style.left = posX + 'px';
      this.el.style.top = posY + 'px';
    }
  }

  const drag = new Drag('.box1');
  const limitDrag = new LimitDrag('.box2');
}

/**
 * 检测数据类型
 * @param {*} data 待判断数据
 * @return {String} 数据类型
 */
function checkDataType(data) {
  const type = Object.prototype.toString.call(data).match(/\[object (.*)\]/);
  return type && type[1] ? type[1] : null;
}

function getQuerystring(name) {
  const reg = `(^|&)${name}=([^&]*)($|&)`;
  const result = window.location.search.substring(1).match(reg);
  return result && result[2] ? decodeURIComponent(result[2]) : null;
}
