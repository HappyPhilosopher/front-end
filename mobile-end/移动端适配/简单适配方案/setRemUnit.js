(function() {
  'use strict';
  function setRemUnit() {
    var docEl = document.documentElement;
    var ratio = 18.75;
    var viewWidth = window.innerWidth;

    docEl.style.fontSize = viewWidth / ratio + 'px';
  }

  setRemUnit();

  window.addEventListener('resize', setRemUnit);
})();
