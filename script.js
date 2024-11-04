let sum = 0;
let array = [24, 23, 67, 3, 5, 79 , 4 ,3];
function filterarray()
{
let x = array.length

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length-1; j++) {
      
      if(array[j] == array[j+1])
      {
        for (let n = 0; n < array.length; n++) {
          array[n] = array[n + 1];
          
        }
      }
    }
  }





  array.length--
}
filterarray()




for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array.length; j++) {
    if (array[j] > array[j + 1]) {
      let temp;
      temp = array[j];
      array[j] = array[j + 1];
      array[j + 1] = temp;
    }
    else if(array.length < 3)
    {
        return null;
    }
  }
}

for (let i = array.length - 3; i < array.length; i++) {
  sum += array[i];
}

console.log(sum);
