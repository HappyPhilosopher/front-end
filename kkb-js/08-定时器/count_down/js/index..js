function isLeapYear(year) {
  if (typeof year !== 'number') {
    alert('请输入正确的年份（数字）');
    return;
  }
  if (year % 100 === 0) {
    if (year % 400 === 0) {
      return true;
    } else {
      return false;
    }
  } else {
    if (year % 4 === 0) {
      return true;
    } else {
      return false;
    }
  }
}

function checkInputValue(value) {
  const year = parseInt(input[0].value);
  const month = parseInt(input[1].value);
  const date = parseInt(input[2].value);

  if (parseInt(value) < 0) {
    return false;
  } else {
    if (isLeapYear(year) && month === 2 && date <= 29) {
      return true;
    } else {
    }
  }
}

// 限定 input 输入框只能输入数字
const input = document.querySelectorAll('input[type="text"]');
Array.from(input).forEach(input => {
  input.addEventListener('keyup', function() {
    this.value = this.value.replace(/[^\d]/g, '');
  });
});
