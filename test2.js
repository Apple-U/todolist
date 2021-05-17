let something={bar:'foo'};

(function(something) {
  something.foo = 123;
})
(something || (something = {}));

console.log(something);


// (function abc(){console.log('abc')})()