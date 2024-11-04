function returnIndex(array , element)
{
    let found = 0
    let newArray = array;
    for (let i = 0; i < array.length; i++) {
        if(newArray[i] === element)
        {
            found = 1;
            console.log(i);
        }
    }
    if(!found)
    {
        console.log(-1);

    }
}

let array = [10,"ahmed" , "marouane" , 20, {nome: "hello"}]

returnIndex(array , "ali");