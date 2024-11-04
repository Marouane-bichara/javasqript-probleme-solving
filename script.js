let sum = 0;
let array = [24, 4, 23, 67, 3, 5, 79];

for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array.length; j++) {
    if (array[j] > array[j + 1]) {
      let temp;
      temp = array[j];
      array[j] = array[j + 1];
      array[j + 1] = temp;
    }
  }
}

for (let i = array.length - 3; i < array.length; i++) {
  sum += array[i];
}

console.log(sum);
