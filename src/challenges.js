// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true)
    return true; {
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
function concatName(arr) {

  let a = arr.shift();
  let b = arr.pop();
  let c = a + " " + b;
  return c;
}
//console.log(concatName(["primeiro", "segundo", "terceiro", "quarto"]));

// Desafio 5
function footballPoints(wins, ties) {
  let poitnVit = 3 * wins;
  let poitnTie = 1 * ties;
  let result = poitnVit + poitnTie;
  return result;
}
//console.log(footballPoints(0, 0));

// Desafio 6
function highestCount(arr) {
  let cont = 0;
  for (let index = 0; index < arr.length; index += 1) {
    let a = Math.max(...arr)
    if (a == arr[index]) {
      cont += 1;
    }
  }
  let result = cont;
  return result;
}
//console.log(highestCount([9, 1, 2, 3, 9, 5, 7]))

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  /*  
    a = (cat1 - cat2) * -1;
    b = (cat2 - cat1) *  
    
    if (cat1 < cat2) {
      console.log("Cat")
      return cat1;
    } else if (cat2 < cat1) {
      console.log("Cat2")
      return cat2;
    } else {
      console.log("os gatos trombam e o rato foge");
      return 0;
    }*/

}
//console.log(catAndMouse(3, 2, 4)) 

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
// precisa de global regular expression
function encode(str) {
  return str.replace(/a/g, "1")
    .replace(/e/g, "2")
    .replace(/i/g, "3")
    .replace(/o/g, "4")
    .replace(/u/g, "5");
}

function decode(str) {
  return str.replace(/1/g, "a")
    .replace(/2/g, "e")
    .replace(/3/g, "i")
    .replace(/4/g, "o")
    .replace(/5/g, "u");
}
//console.log(encode("Hi there"))
//console.log(decode("h3 th2r2!"))

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
