'use strict'
/*Desarrollar una función que realice la multiplicación utilizando únicamente sumas.
La función recibe como parámetros el multiplicador y el multiplicando,
utiliza un bucle para realizar sumas sucesivas y devolver el resultado.*/

function multiplicar(multiplicando, multiplicador){
    let suma = 0;
    for(let i = 0; i < multiplicador; i++){
        suma = suma + multiplicando;
    }
    return suma;
}

let multipli1 = Number(prompt('Ingrese el valor del multiplicando:'));
let multipli2 = Number(prompt('Ingrese el valor del multiplicador:'));

let result = multiplicar(multipli1, multipli2);
alert('El resultado es: ' + result + '.');