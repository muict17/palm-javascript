// impure

let mutateData = 20;

function mutateVariable() {
  mutateData = 10; // <- side effect
}
mutateVariable();
console.log(mutateData);

// pure

let baseValue = 100;

function immutateVariable() {
  return baseValue * 8;
}

console.log(immutateVariable());
console.log(baseValue);

// composite

function getTen() {
  return 10;
}

function displayValue(functionValue) {
  console.log("value from function", functionValue);
}

displayValue(getTen()); // <- composite fog = f(g())

// high order function

function getThirty() {
  return 30;
}

function isThirty(aFunction) {
  if (aFunction() === 30) {
    console.log("value of function is 30");
  }
}

isThirty(getThirty);

// currying

function add(a) {
  return function(b) {
    return a + b;
  };
}

// sequencial
const addFirstNumber = add(10);
const sumationResult = addFirstNumber(10);
console.log(sumationResult);

// curry and excute

const sum = add(10)(10);
console.log(sum);

// clousure

function getNumber() {
  const getTen = () => 10;
  console.log(getTen());
}
getNumber();
