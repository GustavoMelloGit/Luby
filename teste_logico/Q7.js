const array1 = [1, 2, 3, 4];
const array2 = [1, 2, 3, 4];

function verificaIgualdade(array1, array2) {
  let aux = 0;

  if (array1.length != array2.length) return false;
  for (let i in array1) {
    if (array1[i] === array2[i]) {
      aux++;
    }
  }

  if (aux === array1.length) return true;
  else return false;
}
console.log(verificaIgualdade(array1, array2));
