// traditional

const listData = [1, 4, 8, 27, 17, 3, 1, 8];
let sum = 0;

for (let i = 0; i < listData.length; i++) {
  sum = sum + listData[i];
}

console.log(sum);

// reduction

const summation = listData.reduce((acc, current) => acc + current, 0);

console.log(summation);
