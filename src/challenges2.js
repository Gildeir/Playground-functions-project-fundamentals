// Desafio 10

function techList(nameTech, name ) {
  
  let arr = [];

 
  for(index = 0; index < nameTech.length; index += 1){

    arr[index] ={ tech: nameTech[index], name: name, };
   
  } return arr;




  
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
