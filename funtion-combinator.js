//
const listData = [1, 8, 2, 6, 33, 17, 9, 22];

const result = listData
  .map(element => element * element)
  .filter(element => element % 2 === 0)
  .reduce((acc, current) => acc + current, 0);

console.log(result);
