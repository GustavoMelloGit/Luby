const array = [5, 4, 3, 2, 5];
const num1 = 5;
const num2 = 3;

function removeItens(array, num1, num2) {
  for (let i in array) {
    if (array[i] === num1 || array[i] === num2) {
      array.splice(i, 1);
    }
  }
  console.log(array);
}
removeItens(array, num1, num2);
