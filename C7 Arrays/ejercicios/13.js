function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
let nuevoArray = [];
for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 === 0) {
    nuevoArray.push(array[i]); 
  }  
}
return nuevoArray;
}

module.exports = filtrarNumerosPares;
