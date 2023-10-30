"use strict";

function invertirCadena() {
  let textoValor = texto.value;
  let textoInv = textoValor.split("").reverse().join("");
  salida.innerHTML = textoInv;
}
