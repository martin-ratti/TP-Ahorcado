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

function renderBackgroundStars() {
  const container = document.createElement("div");
  container.className = "bg-stars";
  for (let i = 0; i < 25; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.textContent = "+";
    star.style.left = `${Math.random() * 100}vw`;
    star.style.top = `${Math.random() * 100}vh`;
    star.style.transform = `rotate(${Math.random() * 90}deg)`;
    star.style.animationDelay = `${Math.random() * 4}s`;
    container.appendChild(star);
  }
  document.body.appendChild(container);
}

renderBackgroundStars();
mountApp(document.getElementById("app")!, getWordData);
