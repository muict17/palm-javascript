const listData = [1, 4, 5, 7, 9, 29, 19];

// traditional

const listLessThanThirteen = [];

for (let i = 0; i < listData.length; i++) {
  if (listData[i] < 13) {
    listLessThanThirteen.push(listData[i]);
  }
}

console.log(listLessThanThirteen);

// filter

const lessThanThirteen = listData.filter(element => element < 13);
console.log(lessThanThirteen);
