"use strict";

function contarPalabras() {
  const textoValor = texto.value;
  const vocales = textoValor.match(/[aeiou]/gi);
  const consonantes = textoValor.match(/[bcdfghjklmnpqrstvwxyz]/gi);
  const palabras = textoValor.split(/\s+/).filter(Boolean);

  salida.innerHTML = `Número de vocales: ${vocales.length} |
    Número de consonantes: ${consonantes.length} |
    Número de palabras: ${palabras.length}.`;
}
