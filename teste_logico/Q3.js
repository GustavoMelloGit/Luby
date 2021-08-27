const array = [1, 0, "", undefined, 2];
let novoArray = 2;
const tam = array.length;

function limpaArray(valor) {
  if (typeof valor === "number") return valor;
}
novoArray = array.filter(limpaArray);
console.log(novoArray);
