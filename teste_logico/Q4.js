const array = [
  ["c", 2],
  ["d", 4],
];

function converteParaObjeto(array) {
  let object = Object.fromEntries(array);
  console.log(object);
}

converteParaObjeto(array);
