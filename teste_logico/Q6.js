const array = [1,2,3,3,2,4,5,4,7,3];

function removeDuplicado(array){
    const arrayLimpo = new Set(array);
    array = [...arrayLimpo];
    console.log(array);
}

removeDuplicado(array);