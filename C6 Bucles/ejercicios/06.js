function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
  return (num >= 100 && num <= 999) || (num <= -100 && num >= -999);

}

module.exports = tieneTresDigitos;
