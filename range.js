const range = function(start, end, step) {
  let numArray = [];
  if (start === undefined || end === undefined || step === undefined || start > end || step <= 0) {
    console.log(numArray);
    return numArray;
  } else {
    let num = start;
    while (num <= end) {
      numArray.push(num);
      num += step;
    }
    return numArray;
  }
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));