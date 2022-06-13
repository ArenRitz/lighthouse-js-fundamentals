const conditionalSum = function (values, condition) {
  let sumArr = [];
  let totalSum = 0;
  if (condition === 'even') {
    for (i = 0; i < values.length; i++) {
      if (values[i] % 2 === 0) {
        sumArr.push(values[i]);
      } 
    };
    for (x = 0; x < sumArr.length; x++) {
      totalSum += sumArr[x];
    }
    return totalSum;
  } else if (condition === 'odd') {
    for (j = 0; j < values.length; j++) {
      if (values[j] % 2 !== 0) {
        sumArr.push(values[j]);
      }
    }
    for (y = 0; y < sumArr.length; y++) {
      totalSum += sumArr[y];
    }
    return totalSum;
  }
}
console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));