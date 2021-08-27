const array = [1, 2, 3, 4];
let tam = 0;

function inverteArray(array) {
  let varAux;

  do {
    if (array) tam++;
  } while (array[tam] != null);
  tam--;

  for (let i in array) {
    varAux = array[i];
    array[i] = array[tam];
    array[tam] = varAux;
    tam--;
  }
  console.log(array);
}

inverteArray(array);
