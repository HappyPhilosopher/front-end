class MyVue extends EventTarget {
  constructor(options) {
    super();
    this.options = options;
    this.compile();
    this.observers(this.options.data);
  }
  observers(data) {
    Object.keys(data).forEach(key => {
      this.handleData(data, key, data[key]);
    });
  }
  handleData(data, key, value) {
    const _this = this;
    Object.defineProperty(data, key, {
      enumerable: true,
      configurable: true,
      get() {
        return value;
      },
      set(newValue) {
        const event = new CustomEvent(key, {
          detail: newValue
        });
        _this.dispatchEvent(event);
        newValue = value;
      }
    });
  }
  compile() {
    const el = document.querySelector(this.options.el);
    const childNodes = el.childNodes;
    this.handleNodes(childNodes);
  }
  handleNodes(childNodes) {
    childNodes.forEach(node => {
      switch (node.nodeType) {
        // 节点
        case 1:
          this.handleNodes(node.childNodes);
          break;
          
        // 文本
        case 3:
          const reg = /\{\{\s*(\S+)\s*\}\}/;
          const text = node.textContent;
          if (reg.test(text)) {
            const $1 = RegExp.$1;
            node.textContent = text.replace(reg, this.options.data[$1]);
            this.addEventListener($1, e => {
              const oldValue = node.textContent;
              const newValue = e.detail;
              const reg = new RegExp(oldValue, 'g');
              node.textContent = node.textContent.replace(reg, newValue);
            });
          }
          break;
      }
    });
  }
}
