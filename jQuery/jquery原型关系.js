function jQuery() {
  return new jQuery.prototype.init();
}

jQuery.prototype.init = function() {
  console.log('init');
};

jQuery.prototype.css = function() {
  console.log('css');
};

jQuery.prototype.init.prototype = jQuery.prototype;

var jq = new jQuery();
jq.css();
console.log(jQuery.prototype.isPrototypeOf(jq));
console.log(jQuery.prototype.init.prototype.isPrototypeOf(jq));
