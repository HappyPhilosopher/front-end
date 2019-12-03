/* function * loop() {
  for (let i = 0; i < 5; i++) {
    yield console.log(i);
  }
}

const l = loop();
l.next();
l.next();
l.next();
l.next();
l.next();
// 多余的部分不会产生结果
l.next();
l.next(); */

/* function* gen() {
  let val;
  // yield;
  // val = 1;
  val = (yield [1, 2, 3]) + 7;
  console.log(val);
}

const l = gen();
l.next();
l.next(1); */

// 跳过错误，继续循环
/* function* gen() {
  while (true) {
    try {
      yield 1;
    } catch (e) {
      console.log(e.message);
    }
  }
}
const g = gen();
console.log(g.next());
console.log(g.next());
g.throw(new Error('error'));
console.log(g.next()); */

// 斐波那契数列
/* function* fibonacci() {
  let [x, y] = [1, 1];
  while (true) {
    yield x + y;
    [x, y] = [y, x + y];
  }
}

const fib = fibonacci();
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value); */

// 抽奖
/* function* draw(first = 1, second = 2, third = 3) {
  const firstPrize = ['1A', '1B', '1C', '1D', '1E'];
  const secondPrize = ['2A', '2B', '2C', '2D', '2E', '2F', '2G', '2H'];
  const thirdPrize = [
    '3A',
    '3B',
    '3C',
    '3D',
    '3E',
    '3F',
    '3G',
    '3H',
    '3I',
    '3J',
    '3K',
    '3L',
    '3M'
  ];
  let count = 0;

  while (true) {
    if (count < first) {
      const random = Math.floor(Math.random() * firstPrize.length);
      yield firstPrize[random];
      firstPrize.splice(random, 1);
      count++;
    } else if (count < first + second) {
      const random = Math.floor(Math.random() * secondPrize.length);
      yield secondPrize[random];
      secondPrize.splice(random, 1);
      count++;
    } else if (count < first + second + third) {
      const random = Math.floor(Math.random() * thirdPrize.length);
      yield thirdPrize[random];
      thirdPrize.splice(random, 1);
      count++;
    }
  }
}

const d = draw();
console.log(d.next().value);
console.log(d.next().value);
console.log(d.next().value);
console.log(d.next().value);
console.log(d.next().value);
console.log(d.next().value);
console.log(d.next().value); */

// 打印 3 的倍数，否则继续递增
/* function* count(n = 1) {
  while (true) {
    if (n % 3 === 0) {
      yield n;
    }
    n++;
  }
}

const c = count();
console.log(c.next().value);
console.log(c.next().value);
console.log(c.next().value);
console.log(c.next().value); */

// ES5 实现可控斐波那契数列
/* function fibonacci() {
  var x = 1;
  var y = 2;
  var temp = x + y;
  return function() {
    console.log(x + y);
    x = y;
    y = temp;
    temp = x + y;
  };
}

const fib = fibonacci();
fib();
fib();
fib();
fib();
fib();
fib();
fib(); */

function* fibonacci() {
  let [x, y] = [1, 1];
  while (true) {
    yield x + y;
    [x, y] = [y, x + y];
  }
}

const fib = fibonacci();
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
