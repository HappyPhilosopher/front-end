<template>
  <div>
    <input type="text" v-model="val" @input="handler()" />
    <ul v-if="searchList.length > 0">
      <li v-for="item in searchList" :key="item" v-html="item"></li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      val: '',
      list: ['aaaa', 'bbb', 'ccc', 'ddd', 'sasdgs', 'bcxrerte', 'adsfsfsfs'],
      searchList: [],
      // 防抖函数返回的匿名函数必须重新定义
      handler: this.debounce(this.fuzzyQuery, 300)
    };
  },
  methods: {
    fuzzyQuery() {
      this.searchList = this.list
        .filter(item => item.includes(this.val))
        .map(item =>
          item.replace(this.val, `<span style="color: red;">${this.val}</span>`)
        );
      window.console.log(this.searchList.length);
    },
    /**
     * 防抖函数
     * @param {Function} fn 需要防抖的业务函数
     * @param {Number} delay 延迟时间
     * @return {Function} 返回匿名函数，若业务函数带参数，则可以在此调用
     */
    debounce(fn, delay) {
      let timer = null;
      return () => {
        clearTimeout(timer);
        timer = setTimeout(() => {
          fn.apply(this, arguments);
        }, delay);
      };
    }
  }
};
</script>
