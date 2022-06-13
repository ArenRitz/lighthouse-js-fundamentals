const sumLargestNumbers = function (data) {
  let x = 0;
  let y = 0;
  for (i = 0; i < data.length; i++) {
    if (data[i] >= y) {
      x = y;
      y = data[i];
    }
  }
  return x + y;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));