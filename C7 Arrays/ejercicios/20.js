function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:

let primerValor= array[0];
let resultado = array.every(function(numero){
  if (numero === primerValor) {
    return true;
  }else{
    return false;
  }
})
return resultado;
}

module.exports = todosIguales;
