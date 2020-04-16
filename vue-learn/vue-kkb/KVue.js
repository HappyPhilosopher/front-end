class KVue {
  constructor(options) {
    this.$options = options;
    this.$data = options.data;

    // 监听器
    this.observe(this.$data);

    // test
    new Compile(options.el, this);
  }

  observe(obj) {
    if (!obj || typeof obj !== 'object') {
      return;
    }

    // 拦截操作
    Object.keys(obj).forEach(key => {
      this.defineReactive(obj, key, obj[key]);
      // 将数据代理到vm上
      this.proxyData(key);
    });
  }

  defineReactive(obj, key, val) {
    // 递归，val为object
    this.observe(val);

    // dep与key一一对应
    const dep = new Dep();

    Object.defineProperty(obj, key, {
      get() {
        Dep.target && dep.addDep(Dep.target);
        return val;
      },
      set(newVal) {
        if (val !== newVal) {
          val = newVal;
          dep.notify();
          // window.console.log(`${key}属性名更新了`);
        }
      }
    });
  }

  proxyData(key) {
    Object.defineProperty(this, key, {
      get() {
        return this.$data[key];
      },
      set(newVal) {
        this.$data[key] = newVal;
      }
    });
  }
}

// 管理Watcher
class Dep {
  constructor() {
    this.deps = [];
  }

  addDep(dep) {
    this.deps.push(dep);
  }

  notify() {
    this.deps.forEach(dep => dep.update());
  }
}

// Watcher，处理视图与数据关系
class Watcher {
  constructor(vm, key) {
    Dep.target = this;
    this.vm = vm;
    this.key = key;
  }

  update() {
    window.console.log(`${this.key}属性名更新了`);
  }
}
