function esEntero(num) {
  // Retorna true si "num" es un entero, ya sea positivo, negativo o cero.
  // Ejemplo: 0.8   ---> false
  // Ejemplo: 1     ---> true
  // Ejemplo: (-10) ---> true
  // De lo contrario, retorna false.
  // Tu código:
  
    // Convierte el número a su valor absoluto para manejar negativos sin que te salte error
    let NumeroAbsoluto = Math.abs(num);

    // este while verifica si el numero es mayor o igual a 1
    while (NumeroAbsoluto >= 1) {
        NumeroAbsoluto--; // Restamos 1 en cada iteracion
    }

    // Verificar si después del bucle, la variable NumeroAbsoluto es 0 (entero) o tiene decimales
    return NumeroAbsoluto === 0;
}
  
     


module.exports = esEntero;
