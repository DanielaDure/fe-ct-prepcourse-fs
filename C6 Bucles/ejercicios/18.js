function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  if (a > b) {
    [a, b] = [b, a]; 
    // Intercambiamos a y b si es necesario
  }

  // Paso 2: Verificar si el rango incluye 0
  if (a <= 0 && b >= 0) {
    // Si el rango incluye 0, el producto será 0
    return 0;
  }

  // Paso 3: Calcular el producto de los números en el rango sin 0
  let producto = 1;
  for (let i = a; i <= b; i++) {
    producto *= i; // Multiplicamos el producto actual por el número actual
  }

  // Paso 4: Devolver el resultado
  return producto;
}

 
 


module.exports = productoEntreNúmeros;