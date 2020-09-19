"use strict";

const fibonacci = () => {
  let a = 1,
    b = 0,
    temp,
    num = 100,
    result = [0];

  while (num >= 0) {
    temp = a;
    a = a + b;
    b = temp;

    result.push(b);

    if (b >= 350) {
      return result;
    }

    num--;
  }

  return result;
};

const isFibonnaci = (num) => {
  num = Number(num);
  const f = fibonacci();

  return f.includes(num);
};

module.exports = {
  fibonacci,
  isFibonnaci,
};

const fibonacci2 = () => {
  var x = 0;
  var fib = [0, 1];
  do {
    var temp = fib[x] + fib[x + 1];
    fib.push(temp);
    x++;
  } while (temp <= 350);
  return fib;
};

console.log(fibonacci());
