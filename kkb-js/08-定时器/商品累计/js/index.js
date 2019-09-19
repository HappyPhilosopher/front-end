(function() {
  'use strict';
  const cart = [
    {
      price: 12.5,
      num: 0,
      count() {
        return this.price * this.num;
      }
    },
    {
      price: 13.5,
      num: 0,
      count() {
        return this.price * this.num;
      }
    },
    {
      price: 14.5,
      num: 0,
      count() {
        return this.price * this.num;
      }
    },
    {
      price: 15.5,
      num: 0,
      count() {
        return this.price * this.num;
      }
    },
    {
      price: 16.5,
      num: 0,
      count() {
        return this.price * this.num;
      }
    }
  ];
  let totalNum = 0;
  let totalPrice = 0;
  let mostExpensive = 0;

  const listLeftArr = document.querySelectorAll('.list-left');
  const el_count = document.querySelectorAll('.count');
  const strongArr = document.querySelectorAll('strong');

  Array.from(listLeftArr).forEach((el, index) => {
    const minusBtn = el.querySelector('.minus');
    const plusBtn = el.querySelector('.plus');
    const el_span = el.querySelector('.n');

    plusBtn.addEventListener('click', function() {
      cart[index].num += 1;
      render(index);
    });

    minusBtn.addEventListener('click', function() {
      cart[index].num -= 1;
      if (cart[index].num <= 0) {
        cart[index].num = 0;
      }
      render();
    });

    function render() {
      const filterCart = cart.filter(item => item.num > 0);

      totalNum = cart.map(item => item.num).reduce((acc, cur) => acc + cur);
      totalPrice = cart
        .map(item => item.count())
        .reduce((acc, cur) => acc + cur);
      mostExpensive =
        filterCart.length > 0
          ? Math.max(...filterCart.map(item => item.price))
          : 0;

      el_span.innerHTML = cart[index].num;
      el_count[index].innerHTML = `${cart[index].count()}元`;
      strongArr[0].innerHTML = totalNum;
      strongArr[1].innerHTML = totalPrice;
      strongArr[2].innerHTML = mostExpensive;
    }
  });
})();
