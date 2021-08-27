const repeticao = 3;
const valor = "a";

function criaArray(repeticao, valor) {
  const novoArray = [];
  for (let i = 0; i < repeticao; i++) {
    novoArray.push(valor);
  }

  return novoArray;
}

console.log(criaArray(repeticao, valor));
