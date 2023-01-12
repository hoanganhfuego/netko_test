function longestChild(array) {
  let resultArray = [];
  let tempArray = [array[0]];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < array[i + 1]) {
      tempArray.push(array[i + 1]);
    } else if (tempArray.length > resultArray.length) {
      resultArray = [...tempArray];
      tempArray = [array[i + 1]];
    } else {
      tempArray = [array[i + 1]];
    }
  }
  return resultArray;
}

function sumFibonanci(n, sum, next, current) { // not so sure
  let sumValue = sum || 0;
  let nextValue = next || 1;
  let currentValue = current || 0;
  if (nextValue < n) {
    console.log(sum, "dung roi")
    sum =
      sum +
      sumFibonanci(
        n,
        sumValue + nextValue,
        currentValue + nextValue,
        nextValue
      );
    return sum;
  }
  console.log(sum, "het roi")
  return n;
}

// console.log(sumFibonanci(3, 0, 1, 0), "result"); // 0, 1, 1, 2, 3, 5