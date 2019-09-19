(function() {
  'use strict';
  const el_textarea = document.querySelector('textarea');
  const el_p = document.querySelector('p');
  const el_a = document.querySelector('a');
  const el_span = document.querySelector('span');
  const el_ul = document.querySelector('ul');
  const el_lis = el_ul.querySelectorAll('li');
  let timer = 0;

  el_a.addEventListener('click', function() {
    let index = 0;
    let txt = el_textarea.value;

    if (timer) {
      return;
    }
    timer = setInterval(() => {
      index++;
      el_textarea.value = txt.substring(index);
      el_p.innerHTML = txt.substring(0, index);
      el_span.innerHTML = `${index}/${txt.length}`;
      el_ul.style.opacity = 1;
      Array.from(el_lis).forEach(el => {
        el.classList.remove('active');
      });
      el_lis[index % el_lis.length].classList.add('active');

      if (index >= txt.length) {
        clearInterval(timer);
        timer = 0;
        el_ul.style.opacity = 0;
      }
    }, 20);
  });
})();
