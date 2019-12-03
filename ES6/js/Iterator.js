const authors = {
  allAuthors: {
    fiction: ['Agla', 'Skks', 'LP'],
    scienceFiction: ['Neal', 'Arthru', 'Ribert'],
    fantasy: ['J.R.Tole', 'J.M.R', 'Terry P.K']
  },
  address: []
};

// authors[Symbol.iterator] = function() {
//   let { allAuthors } = this;
//   let keys = Reflect.ownKeys(allAuthors);
//   let values = [];
//   return {
//     next() {
//       if (!values.length) {
//         if (keys.length) {
//           values = allAuthors[keys[0]];
//           keys.shift();
//         }
//       }
//       return {
//         done: !values.length,
//         value: values.shift()
//       };
//     }
//   };
// };

// Generator 自带可遍历协议
authors[Symbol.iterator] = function* () {
  const { allAuthors } = this;
  let keys = Reflect.ownKeys(allAuthors);
  let values = [];

  while (true) {
    if (!values.length) {
      if (keys.length) {
        values = allAuthors[keys[0]];
        keys.shift();
        yield values.shift();
      } else {
        return false;
      }
    } else {
      yield values.shift();
    }
  }
};

let v = [];
for (const item of authors) {
  v.push(item);
}
console.log(v);

// 模拟遍历器结构
/* function makeIterator(arr) {
  let lastIndex = 0;
  return {
    next() {
      return lastIndex < arr.length
        ? { done: false, value: arr[lastIndex++] }
        : { done: true, value: undefined };
    }
  };
}

const arr = makeIterator(['a', 'b']);
console.log(arr.next());
console.log(arr.next());
console.log(arr.next()); */

// 无限遍历器
/* function idMaker() {
  let index = 0;
  return {
    next() {
      return {
        value: index++,
        done: false
      };
    }
  };
}

const id = idMaker();
console.log(id.next());
console.log(id.next());
console.log(id.next()); */

// 遍历器接口
/* const arr = ['a', 'b', 'c'];
const iterator = arr[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
for (const v of arr) {
  console.log(v);
} */

/* class RangeIterator {
  constructor(start, stop) {
    this.start = start;
    this.stop = stop;
  }
  [Symbol.iterator]() {
    return this;
  }
  next() {
    let value = this.start;
    if (value < this.stop) {
      this.start++;
      return {
        done: false,
        value: value
      };
    }
    return {
      done: true,
      value: undefined
    };
  }
}

function range(start, stop) {
  return new RangeIterator(start, stop);
}

for (const item of range(0, 3)) {
  console.log(item);
}

console.log(range(0, 3)); */

/* const obj = {
  data: ['hello', 'world'],
  [Symbol.iterator]() {
    const _this = this;
    let index = 0;
    return {
      next() {
        if (index < _this.data.length) {
          return {
            value: _this.data[index++],
            done: false
          };
        }
        return {
          value: undefined,
          done: true
        };
      }
    };
  }
};

for (const item of obj) {
  console.log(item);
}

const o = obj[Symbol.iterator]();
console.log(o.next());
console.log(o.next());
console.log(o.next()); */
