/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function sumaTodosPrimos(array) {
  // La funcion llamada 'sumaTodosPrimos' recibe como argumento un array de enteros.
  // y debe devolver la suma total entre todos los numeros que sean primos.
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Nota: Los números 0 y 1 NO son considerados números primos
  // Ej:
  // sumaTodosPrimos([1, 5, 2, 9, 3, 4, 11]) devuelve 5 + 2 + 3 + 11 = 21
  // Nota: Podes usar la funcion 'esPrimo' resuelta en la homework JSII.

  // Tu código aca:

  var arrayPrimos = array.filter( numero => {
    if (numero == 0 || numero == 1 ||  Math.abs(numero) == 2 ) return false;
    for (var x = 2; x < numero / 2; x++) {
        if (numero % x == 0) return false;
    }
     return numero;
    })

   return arrayPrimos.reduce((previosValue, currentValue) => previosValue + currentValue)

}

// No modifiques nada debajo de esta linea //

module.exports = sumaTodosPrimos