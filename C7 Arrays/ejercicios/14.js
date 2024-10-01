function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  let contador = 0;
  array.forEach(function (elemento){  
   if(elemento > 10 ){
      contador++;
   } 
  })  
  return contador;
}

module.exports = contarElementosMayoresA10;
