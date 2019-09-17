const container = document.querySelector('.container');
const img = container.querySelector('.content li img');
const prevBtn = container.querySelector('.prev');
const nextBtn = container.querySelector('.next');
const paginationArr = container.querySelectorAll('.pagination-bullet');
const data = ['images/1.jpg', 'images/2.jpg', 'images/3.jpg'];
const length = data.length;

const controller = {
  index: 0,
  render() {
    img.setAttribute('src', data[controller.index]);
    paginationArr.forEach(item => item.classList.remove('active'));
    paginationArr[controller.index].classList.add('active');
  },
  prev() {
    controller.index--;
    if (controller.index < 0) {
      controller.index = length - 1;
    }
    this.render();
  },
  next() {
    controller.index++;
    if (controller.index > length - 1) {
      controller.index = 0;
    }
    this.render();
  }
};

document.body.addEventListener('click', e => {
  const target = e.target;
  switch (target.className) {
    case 'prev':
      controller.prev();
      break;

    case 'next':
      controller.next();
      break;
  }
});

Array.from(paginationArr).forEach((item, index) => {
  item.addEventListener('mouseenter', function() {
    controller.index = index;
    controller.render();
  });
});
