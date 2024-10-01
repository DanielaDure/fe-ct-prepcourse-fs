function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  let numeroMayor = array[0];
  let indiceMayor = 0;
  array.forEach(function ( numero , indice) {
    if(numero > numeroMayor){
    numeroMayor = numero;
    indiceMayor = indice;
     }
  })
    
  return indiceMayor;    
  }


module.exports = encontrarIndiceMayor;
