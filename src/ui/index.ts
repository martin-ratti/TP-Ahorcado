import { mountApp } from "./main";
import { elegirPalabra, PALABRAS } from "../domain/palabras";

const params = new URLSearchParams(window.location.search);
const word = params.get("word") ??
  elegirPalabra(PALABRAS, Math.floor(Math.random() * PALABRAS.length));

mountApp(document.getElementById("app")!, word);
