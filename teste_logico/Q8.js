const array = [1, 2, [3], [4, 5]];
function retiraAninhamento(array) {
  for (let i in array) {
    if (typeof array[i] === "object") {
      for (let j in array[i]) {
        array.push(array[i][j]);
      }
    }
  }

  for (let i = array.length; i >= 0; i--) {
    if (typeof array[i] === "object") {
      array.splice(i, 1);
    }
  }
  console.log(array);
}

retiraAninhamento(array);
