function ReverseArray(array) {
  let newArray = array;

  let i = 0;
  let j = newArray.length - 1;
  while (j > i) {
    let temp;
    temp = newArray[i];
    newArray[i] = newArray[j];
    newArray[j] = temp;
    j--;
    i++;
  }

  console.log(newArray);
}

let array = [10, 20, 30, 40, 50];
ReverseArray(array);
