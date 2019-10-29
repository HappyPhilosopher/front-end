'use strict';

class CostomEvent {
  constructor() {
    this.handler = {};
  }
  addEvent(eventName, fn) {
    if (this.handler[eventName] === undefined) {
      this.handler[eventName] = [];
    }
    this.handler[eventName].push(fn);
  }
  removeEvent(eventName, fn) {
    if (!this.handler[eventName].includes(fn)) {
      return;
    }
    this.handler[eventName].forEach((item, index) => {
      if (item === fn) {
        this.handler[eventName].splice(index, 1);
      }
    });
  }
  trigger(eventName) {
    this.handler[eventName].forEach(fn => {
      fn();
    });
  }
}

function sayHi() {
  console.log('Hi');
}

function sayHello() {
  console.log('Hello');
}

const myEvent = new CostomEvent();
myEvent.addEvent('myFn', sayHi);

document.querySelector('.btn-addEvent').addEventListener('click', function() {
  myEvent.addEvent('myFn', sayHello);
});

document
  .querySelector('.btn-removeEvent')
  .addEventListener('click', function() {
    myEvent.removeEvent('myFn', sayHi);
  });

document.querySelector('.btn-trigger').addEventListener('click', function() {
  myEvent.trigger('myFn');
});
