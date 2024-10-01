function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  let  suma = arrayOfNums.reduce(function(acum ,numero){ 
     return acum + numero ;
  }, 0)
  return suma;
  
}

module.exports = agregarNumeros;
