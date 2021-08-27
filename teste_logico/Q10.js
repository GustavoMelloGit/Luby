const array1 = [6, 8];
const array2 = [8, 9];

function valorComum(array1, array2) {
  let aux = [];
  for (i in array1) {
    for (j in array2) {
      if (array1[i] === array2[j]) {
        aux.push(array1[i]);
      }
    }
  }

  console.log(aux);
}

valorComum(array1, array2);
