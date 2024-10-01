function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:

let arregloFiltrado = array.filter  (function (string){ 
     if(string.length >= 5  ) 
      return string;
     })
 return arregloFiltrado[0];
}







module.exports = obtenerPrimerStringLargo;
