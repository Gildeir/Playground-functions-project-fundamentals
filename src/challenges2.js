// Desafio 10
function techList(NomeTech, name) {
  let sortName = NomeTech.sort();
  let arrInserted = [];

  if ((sortName.length === 0) || (sortName[0] === '') || (sortName[0] === ' ')) {
    return 'Vazio!';
  }

  for (let index = 0; index < sortName.length; index += 1) {
    let objectInserted;
    objectInserted.tech = sortName[index];
    objectInserted.name = name;
    arrInserted.push(objectInserted);
  }
  return arrInserted;
}
// sconsole.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas"))

// Desafio 11
function generatePhoneNumber(arr) {
  let check = arr.length;
  let store = 0;
  let count = 0;
  if (check !== 11) return 'Array com tamanho incorreto.';
  for (let index = 0; index < arr.length; index += 1) {
    store = arr[index]; if (store < 0 || store > 10) return 'não é possível gerar um número de telefone com esses valores';
  }
  // arr.sort()
  for (let indexA = 0; indexA < arr.length; indexA += 1) {
    for (let indexB = indexA + 1; indexB < arr.length; indexB += 1) {
      if (arr[indexA] === arr[indexB]) count += 1;
      console.log(`Contou:${count}`);
    }
    if (count >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }

  let mask = '(xx) xxxxx-xxxx';

  arr.forEach((item) => {
    mask = mask.replace('x', item);
  });

  return mask;
}

// console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < (lineB + lineC) && lineA > (Math.abs(lineB - lineC))
    && lineB < (lineA + lineC) && lineB > (Math.abs(lineA - lineC))
    && lineC < (lineB + lineA) && lineC > (Math.abs(lineA - lineB)));
  return true;
} // console.log(triangleCheck(10, 14, 8))

// Desafio 13
function hydrate(drink) {
  let regExp = /\d+/g;
  let result = drink.match(regExp);
  let sum = 0;
  let numberOfDrinks = result;
  for (let index = 0; index < numberOfDrinks.length; index += 1) {
    sum += parseFloat(numberOfDrinks[index]);
  }
  if (sum <= 1) {
    return `${sum} copo de água`;
  }
  return `${sum} copos de água`;
} // console.log(hydrate( "1 cachaça, 5 cervejas e 1 copo de vinho"))

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
