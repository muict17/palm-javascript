const listData = [3, 4, 5, 7, 2, 1, 8];

// traditional
let listMultiplyFive = [];
for (let i = 0; i < listData.length; i++) {
  listMultiplyFive.push(listData[i] * 5);
}

console.log(listMultiplyFive);

// functor
const mapMultiplyFive = listData.map(element => element * 5);

const multiplyFive = element => element * 5;

const mapWithReuse = listData.map(multiplyFive);
console.log(mapWithReuse);
console.log(mapMultiplyFive);
