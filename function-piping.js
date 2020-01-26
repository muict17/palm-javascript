const listData = [1, 4, 28, 18, 3, 9, 19];

const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);

function isEven(element) {
  return element % 2 === 0;
}

function isSquare(element) {
  return element * element;
}

function sum(acc, current) {
  return acc + current;
}

function firstNum(element) {
  return element[0];
}

const result = pipe(
  isSquare,
  isEven,
  sum,
  firstNum
)(listData);

console.log(result);
