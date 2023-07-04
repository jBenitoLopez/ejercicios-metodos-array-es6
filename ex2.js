// Uso adecuado de let y scope para actualizar una variable

// https://www.w3schools.com/react/react_es6_variables.asp

let puedesPasar = true;
edad = 17;

if (edad < 18) {
  let puedesPasar = false;
}

console.log(puedesPasar); // false

// PREGUNTA: ¿Por qué no se actualiza correctamente la variable 'puedesPasar'?
/*
    con las llaves limitamos el scope de las variables, puede ser una funcion, if o incluso solo un cuerpo con llaves.
*/
