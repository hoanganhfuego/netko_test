const array = [1, 4, 5, 4, 3, 45, 6, 7, 89, 4, 3, 25, 2435, 99999];

function childArray(array) {
  let maxLength = 0;
  let index = 0;
  let current = 0;
  const childArrays = { [index]: [array[0]] };
  for (let i = 0; i < array.length; i++) {
    if (array[i] < array[i + 1]) {
      childArrays[index].push(array[i + 1]);
    } else {
      if (maxLength < childArrays[index].length) {
        current = index;
        maxLength = childArrays[index].length;
      }
      index = index + 1;
      childArrays[index] = [array[i + 1]];
    }
  }
  return childArrays[current];
}

console.log(childArray(array));
