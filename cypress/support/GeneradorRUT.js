function generarRUT() {
    let rut = Math.floor(Math.random() * 99999999) + 1;
  
    let digitValid = validarRUT(rut);
  
    return rut + digitValid;
  }
  
  function validarRUT(rut) {
    if (isNaN(rut) || rut < 0 || rut > 99999999) {
      return null;
    }
  
    let sum = 0;
    let multiplier = 2;
  
    for (let i = rut.toString().split('').reverse().join(''), j = 0; j < i.length; j++) {
      sum += i.charAt(j) * multiplier;
      multiplier = multiplier < 7 ? multiplier + 1 : 2;
    }
  
    let checkDigit = 11 - (sum % 11);
  
    if (checkDigit === 10) {
      return 'K';
    } else if (checkDigit === 11) {
      return '0';
    } else {
      return checkDigit.toString();
    }
  }
  module.exports = {generarRUT, validarRUT }