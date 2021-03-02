// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true)
    return true;
  {
    return false;
  }
}
//console.log(compareTrue(false, true))

// Desafio 2
function calcArea(base, height) {
  calc = (base * height) / 2
  return calc;
}
//console.log(calcArea(10, 50))

// Desafio 3
function splitSentence(sentence) {
  let arr = sentence.split(" ");
  return arr;
}
//console.log(splitSentence("foquete"))

// Desafio 4
function concatName(name) {
   
  let a = name.shift();
  let b = name.pop();
  let c = a + " " + b;
  return c;
}
//onsole.log(concatName(["primeiro", "segundo", "terceiro", "quarto"]));

// Desafio 5
function footballPoints(wins, ties) {
  let poitnVit = 3 * wins;
  let poitnTie = 1 * ties;
  let result = poitnVit + poitnTie;
  return result;
}
//console.log(footballPoints(0, 0));

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
