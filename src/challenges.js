// Desafio 1
function compareTrue(a, b) {
  if (a === "true" && b === "true")
    return true;
  else {
    return false;
  }
}
console.log(compareTrue("false", "true"))

// Desafio 2
function calcArea(base, height) {
  calc = (base * height) / 2
  return calc;
}
console.log(calcArea(10, 50))

// Desafio 3
function splitSentence(sentence) {
  let arr = sentence.split(" ");
  return arr;
}
console.log(splitSentence("foquete"))

// Desafio 4
function concatName() {
  let sArr = ["Primeiro", "Segundo", "Terceiro", "quarto", "quinto"];
  let a = sArr.slice(0, 1)
  let b = sArr.slice(sArr.length - 1)
  let c = a.concat(b);
  return c
}
console.log(concatName())

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}

function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
