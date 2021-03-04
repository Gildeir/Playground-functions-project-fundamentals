// Desafio 10


function techList(NomeTech, name ) {
  
    let sortName = NomeTech.sort();
    let arrInserted = [];

  if ((sortName.length == 0)||(sortName[0]=='')||(sortName[0]==" ")) {
      return "Vazio!"}

  for(index = 0; index < sortName.length; index += 1){
    let objectInserted = {};
    objectInserted ["tech"] = sortName[index];    
    objectInserted["name"] = name;
    arrInserted.push(objectInserted);
    
  }return arrInserted;

 }console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"],"Lucas"))

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
