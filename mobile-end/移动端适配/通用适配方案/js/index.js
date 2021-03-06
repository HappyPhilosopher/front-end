(function() {
  'use strict';
  var docEl = document.documentElement;
  var viewportEl = document.querySelector('meta[name="viewport"]');
  var dpr = window.devicePixelRatio;
  var maxWidth = 540;
  var minWidth = 320;

  dpr = dpr >= 3 ? 3 : dpr >= 2 ? 2 : 1;

  var scale = 1 / dpr;
  var content = `width=device-width, initial-scale=${scale}, maximum-scale=\
${scale}, minimum-scale=${scale}, user-scalable=no`;

  docEl.setAttribute('data-dpr', dpr);
  docEl.setAttribute('max-width', maxWidth);
  docEl.setAttribute('min-width', minWidth);

  if (viewportEl) {
    viewportEl.setAttribute('content', content);
  } else {
    var viewportEl = document.createElement('meta');
    viewportEl.setAttribute('name', 'viewport');
    viewportEl.setAttribute('content', content);
    document.head.appendChild(viewportEl);
  }

  setRemUnit();

  window.addEventListener('resize', setRemUnit);

  function setRemUnit() {
    var ratio = 18.75;
    var viewWidth = window.innerWidth;

    if (maxWidth && viewWidth / dpr > maxWidth) {
      viewWidth = maxWidth * dpr;
    } else if (minWidth && viewWidth / dpr < minWidth) {
      viewWidth = minWidth * dpr;
    }

    docEl.style.fontSize = viewWidth / ratio + 'px';
  }
})();
