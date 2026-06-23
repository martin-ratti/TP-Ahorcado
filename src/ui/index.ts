import { mountApp } from "./main";
import { elegirPalabra, PALABRAS } from "../domain/palabras";

const params = new URLSearchParams(window.location.search);
const wordParam = params.get("word");

const getWord = wordParam
  ? () => wordParam
  : () => elegirPalabra(PALABRAS, Math.floor(Math.random() * PALABRAS.length));

mountApp(document.getElementById("app")!, getWord);
