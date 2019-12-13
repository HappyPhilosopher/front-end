(function() {
  // 图片懒加载
  // 方案一：IntersectionObserver
  /* const observer = new IntersectionObserver(changes => {
    changes.forEach(change => {
      if (change.intersectionRatio > 0) {
        const img = change.target;
        img.src = img.dataset.src;
        observer.unobserve(img);
      }
    });
  });

  const lazyloadEl = document.querySelectorAll('.lazyload');

  Array.from(lazyloadEl).forEach(item => {
    observer.observe(item);
  }); */

  // 方案二

  function transform2Array(arrayLike) {
    return Array.from(arrayLike);
  }

  function lazyload(el) {
    const lazyloadEl = document.querySelectorAll(el);
    transform2Array(lazyloadEl).forEach(el => {
      if (isVisible(el)) {
        el.setAttribute('src', el.dataset.src);
      }
    });
  }

  function isVisible(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.bottom > 0 &&
      rect.top < window.innerHeight &&
      rect.right > 0 &&
      rect.left < window.innerWidth
    );
  }

  function debounce(fn, delay) {
    let timer = 0;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn.apply(this, args);
      }, delay);
    };
  }

  lazyload('.lazyload');

  const fn = debounce(lazyload, 100);

  window.addEventListener('scroll', function() {
    fn('.lazyload');
  });

  // 按需加载资源
  function loadProduct(el) {
    const productEl = document.querySelectorAll(el);
    Array.from(productEl).forEach(el => {
      if (isVisible(el)) {
        const script = document.createElement('script');
        script.src = 'js/product.js';
        document.body.appendChild(script);
      }
    });
  }

  loadProduct('.product');

  const productFn = debounce(loadProduct, 100);

  window.addEventListener('scroll', function() {
    productFn('.product');
  });
})();
