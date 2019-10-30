'use strict';

class CustomEvent {
  constructor() {
    this.handler = {};
  }
  addEvent(eventName, fn) {
    if (this.handler[eventName] === undefined) {
      this.handler[eventName] = [];
    }
    this.handler[eventName].push(fn);
  }
  removeEvent(eventName, fn) {
    if (!this.handler[eventName].includes(fn)) {
      return;
    }
    this.handler[eventName].forEach((item, index) => {
      if (item === fn) {
        this.handler[eventName].splice(index, 1);
      }
    });
  }
  trigger(eventName) {
    this.handler[eventName].forEach(fn => {
      fn();
    });
  }
}

class CustomDialog extends CustomEvent {
  constructor(options) {
    const newOpt = Object.assign(
      {
        width: '25%',
        height: '40%',
        title: '默认标题',
        content: '默认内容',
        isMaskable: true,
        isDraggable: true,
        isCancelable: true,
        ensure() {
          console.log('点击了确定');
        },
        cancel() {
          console.log('点击了取消');
        }
      },
      options
    );

    super();
    this.opt = newOpt;
    this.dialog = null;
    this.init();
  }
  init() {
    this.render();

    this.opt.isDraggable && this.drag();

    this.addEvent('ensure', this.opt.ensure);
    this.addEvent('cancel', this.opt.cancel);

    this.dialog.addEventListener(
      'click',
      function(e) {
        switch (e.target.className) {
          case 'close':
            this.closeDialog();
            break;

          case 'cancel':
            this.trigger('cancel');
            break;

          case 'ensure':
            this.trigger('ensure');
            break;
        }
      }.bind(this)
    );
  }
  render() {
    const popupContainer = document.createElement('div');
    popupContainer.classList.add('popup-container');
    popupContainer.innerHTML = `
      ${this.opt.isMaskable ? '<div class="mask"></div>' : ''}
      <div class="popup">
        <div class="popup-top">
          <div class="close">×</div>
        </div>
        <div class="popup-middle">
          <h2 class="title">${this.opt.title}</h2>
          <p class="content">${this.opt.content}</p>
        </div>
        <div class="popup-bottom">
          <div class="ensure">确定</div>
          ${this.opt.isCancelable ? '<div class="cancel">取消</div>' : ''}
        </div>
      </div>
    `;
    this.dialog = popupContainer;
    document.body.appendChild(this.dialog);
  }
  drag() {
    const popup = this.dialog.querySelector('.popup');
    popup.style.cursor = 'move';
    popup.onmousedown = e => {
      const startPos = {
        l: e.clientX,
        t: e.clientY
      };
      const initPos = {
        l: popup.getBoundingClientRect().left,
        t: popup.getBoundingClientRect().top
      };

      document.onmousemove = e => {
        e.preventDefault();

        const endPos = {
          l: e.clientX,
          t: e.clientY
        };
        const clientW = window.innerWidth;
        const clientH = window.innerHeight;
        let posX = endPos.l - startPos.l + initPos.l;
        let posY = endPos.t - startPos.t + initPos.t;
        posX = Math.max(0, posX);
        posX = Math.min(posX, clientW - popup.getBoundingClientRect().width);
        posY = Math.max(0, posY);
        posY = Math.min(posY, clientH - popup.getBoundingClientRect().height);
        popup.style.transform = 'translate(0, 0)';
        popup.style.left = posX + 'px';
        popup.style.top = posY + 'px';
      };

      document.onmouseup = () => {
        document.onmousemove = null;
      };
    };
  }
  openDialog() {
    this.dialog.style.display = 'block';
  }
  closeDialog() {
    this.dialog.style.display = 'none';
  }
}

const dialog = new CustomDialog({
  width: '500px',
  height: '400px',
  title: 'Hello World',
  content: 'This is a beautiful world!',
  ensure() {
    alert('hello world');
  }
});
const btn = document.querySelector('.btn');

btn.addEventListener('click', function() {
  dialog.openDialog();
});
