function ReverseArray(array) {


  let i = 0;
  let j = array.length - 1;
  while (j > i) {
    let temp;
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
    j--;
    i++;
  }

  console.log(array);
}

let array = [10, 20, 30, 40, 50];
ReverseArray(array);
