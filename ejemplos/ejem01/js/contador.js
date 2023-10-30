"use strict";

function contadorPalabras() {
  const textoValor = texto.value;
  const palabras = textoValor.toLowerCase().split(/\W+/).filter(Boolean);
  let palabra = {};

  palabras.forEach((p) => {
    if (palabra[p]) {
      palabra[p]++;
    } else {
      palabra[p] = 1;
    }
  });

  let resultado = "";

  for (let palabraKey in palabra) {
    if (palabra.hasOwnProperty(palabraKey)) {
      resultado += `La palabra '${palabraKey}' aparece ${palabra[palabraKey]} veces.<br>`;
    }
  }

  salida.innerHTML = resultado;
}
