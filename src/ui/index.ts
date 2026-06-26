import { mountApp } from "./main";
import { elegirPalabra, PALABRAS, PalabraConPista } from "../domain/palabras";

const params = new URLSearchParams(window.location.search);
const wordParam = params.get("word");
const hintParam = params.get("hint");

const getWordData = (): PalabraConPista => {
  if (wordParam) {
    return { palabra: wordParam, pista: hintParam || "" };
  }
  return elegirPalabra(PALABRAS, Math.floor(Math.random() * PALABRAS.length));
};

mountApp(document.getElementById("app")!, getWordData);
