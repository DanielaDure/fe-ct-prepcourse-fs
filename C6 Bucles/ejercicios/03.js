function obtenerMayor(x, y) {
  // "x" e "y" son números enteros.
  // Retorna el número más grande.
  // Si son iguales, retornar cualquiera de los dos.
  // Tu código:
  
  // Inicializamos la variable mayor con uno de los números.
  let mayor = x;

  // Usamos un bucle para comparar los números.
  while (x !== y) {
    // Si x es mayor que y, mantenemos x como mayor.
    if (x > y) {
      mayor = x;
      break; // Salimos del bucle ya que hemos encontrado el mayor.
    } else {
      // Si y es mayor que x, actualizamos mayor a y.
      mayor = y;
      break; // Salimos del bucle ya que hemos encontrado el mayor.
    }
  }

  // Si x es igual a y, mantenemos el valor de mayor que ya se ha inicializado.
  return mayor;
}


  

module.exports = obtenerMayor;
