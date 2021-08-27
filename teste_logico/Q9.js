const array = [1, 2, 3, 4, 5];
const num = 2;

function divideArray(array, num) {
  const divisao = Math.ceil(array.length / num);
  const arrayAux = new Array(divisao).fill().map(() => array.splice(0, num));

  console.log(arrayAux);
}

divideArray(array, num);
