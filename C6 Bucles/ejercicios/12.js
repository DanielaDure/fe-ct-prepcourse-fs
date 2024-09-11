function fizzBuzz(num) {
  // Si "num" es divisible entre 3, retorna "fizz".
  // Si "num" es divisible entre 5, retorna "buzz".
  // Si "num" es divisible entre 3 y 5 (ambos), retorna "fizzbuzz".
  // De lo contrario, retorna false.
  // Tu código:
  
  if (num % 3 === 0 && num % 5 === 0) {
    return "fizzbuzz";
  }
  // Verificamos si el número es divisible solo entre 3.
  // Si es divisible entre 3, retornamos "fizz".
  else if (num % 3 === 0) {
    return "fizz";
  }
  // Verificamos si el número es divisible solo entre 5.
  // Si es divisible entre 5, retornamos "buzz".
  else if (num % 5 === 0) {
    return "buzz";
  }
  // Si el número no es divisible ni entre 3 ni entre 5,
  // retornamos false.
  else {
    return false;
  }
  
}



module.exports = fizzBuzz;
