'use strict'
/*Aquí tienes una redacción mejorada para describir la función.
Crear una función que calcule la edad de una persona.
La función toma como parámetro el año de nacimiento y devuelve la edad correspondiente.*/

function calcularEdad(anioNacimiento) {
    
    //Proceso para calcular la edad.
    let edad = 2023 - anioNacimiento;
    alert("Tu edad es: " + edad + " años");
  }

// Ejemplo de uso: pasar el año de nacimiento como argumento y habilitar prompt para el ADN.
let anioNacimientoUsuario = Number(prompt('Ingrese el año nacimiento:'));
calcularEdad(anioNacimientoUsuario);