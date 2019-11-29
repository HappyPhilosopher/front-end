// 异步加载脚本
/* function loadScript(src, cb) {
  const script = document.createElement('script');
  script.src = src;
  // 加载脚本、图片等外部资源，有一个加载的过程
  script.onload = () => {
    cb && cb(src);
  };
  document.head.appendChild(script);
}

function test() {
  console.log('test');
}

loadScript('./1.js', function(script) {
  loadScript('./2.js', function(script) {
    loadScript('./3.js', function() {});
  });
}); */

/* function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => {
      resolve();
    };
    script.onerror = err => {
      reject(err);
    };
    document.head.appendChild(script);
  });
}

loadScript('./1.js')
  .then(() => {
    console.log('script01 loaded.');
    return loadScript('./2.js');
  })
  .then(() => {
    console.log('script02 loaded.');
    return loadScript('./3.js');
  })
  .then(() => {
    console.log('script03 loaded.');
    return loadScript('./4.js');
  })
  .catch(err => {
    console.log(err);
  }); */

const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = Promise.resolve(3);

Promise.all([p1, p2, p3]).then(res => {
  console.log(res);
});
