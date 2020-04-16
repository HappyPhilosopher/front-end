class Compile {
  constructor(el, vm) {
    this.$vm = vm;
    this.$el = document.querySelector(el);

    // 把模板中的内容移动到node片段中
    this.$fragment = this.node2fragment(this.$el);
    // 执行编译
    this.compile(this.$fragment);
    // 放回el中
    this.$el.appendChild(this.$fragment);
  }

  node2fragment(el) {
    const fragment = document.createDocumentFragment();
    let child;
    while ((child = el.firstChild)) {
      fragment.appendChild(child);
    }
    return fragment;
  }

  compile(node) {
    const childNodes = node.childNodes;
    Array.prototype.slice.apply(childNodes).forEach(node => {
      if (node.nodeType === 1) {
        // element node
        // window.console.log(`element node ${node.nodeName.toLowerCase()}.`);
        this.compileElementNode(node);
      } else if (this.isInterpolation(node)) {
        // text node
        // window.console.log(`text node ${node.textContent}.`);
        this.compileTextNode(node);
      }

      if (node.childNodes.length > 0) {
        this.compile(node);
      }
    });
  }

  isInterpolation(node) {
    return node.nodeType === 3 && /\{\{(.*)\}\}/.test(node.textContent);
  }

  compileElementNode(node) {}

  compileTextNode(node) {
    const prop = RegExp.$1.trim();
    node.textContent = this.$vm[prop];
  }
}
