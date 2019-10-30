'use strict';

(function() {
  function fn() {
    const end = 5;
    let a = 1;
    return new Promise(res => {
      setTimeout(() => {
        if (a === end) {
          res();
        } else {
          a++;
          console.log(a);
        }
      }, 1000);
    });
  }

  fn()
    .then(res => {
      res();
    })
    .then(res => {
      res();
    });
})();
