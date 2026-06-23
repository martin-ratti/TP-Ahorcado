import { Ahorcado } from "../domain/Ahorcado";

// Cada parte es un elemento SVG. El AT cuenta cuántos data-testid="hangman-part" hay.
const SVG_PARTES = [
  `<circle data-testid="hangman-part" cx="100" cy="40" r="15" stroke="black" stroke-width="3" fill="none"/>`,
  `<line data-testid="hangman-part" x1="100" y1="55" x2="100" y2="110" stroke="black" stroke-width="3"/>`,
  `<line data-testid="hangman-part" x1="100" y1="70" x2="70" y2="95" stroke="black" stroke-width="3"/>`,
  `<line data-testid="hangman-part" x1="100" y1="70" x2="130" y2="95" stroke="black" stroke-width="3"/>`,
  `<line data-testid="hangman-part" x1="100" y1="110" x2="75" y2="140" stroke="black" stroke-width="3"/>`,
  `<line data-testid="hangman-part" x1="100" y1="110" x2="125" y2="140" stroke="black" stroke-width="3"/>`,
];

function dibujoAhorcado(partes: number): string {
  const cuerpo = SVG_PARTES.slice(0, partes).join("\n");
  return `
    <svg width="160" height="200" style="border:1px solid #ccc">
      <!-- estructura del patíbulo -->
      <line x1="20" y1="190" x2="140" y2="190" stroke="black" stroke-width="3"/>
      <line x1="60" y1="190" x2="60" y2="10" stroke="black" stroke-width="3"/>
      <line x1="60" y1="10" x2="100" y2="10" stroke="black" stroke-width="3"/>
      <line x1="100" y1="10" x2="100" y2="25" stroke="black" stroke-width="3"/>
      ${cuerpo}
    </svg>
  `;
}

export function mountApp(root: HTMLElement, getWord: () => string): void {
  iniciarPartida(root, getWord);
}

function iniciarPartida(root: HTMLElement, getWord: () => string): void {
  const game = new Ahorcado(getWord());
  render(root, game, getWord);
}

function render(root: HTMLElement, game: Ahorcado, getWord: () => string, mensaje = ""): void {
  const mensajeFin = game.ganado() ? "GANASTE" : game.perdido() ? "PERDISTE" : "";

  root.innerHTML = `
    <h1>Ahorcado</h1>
    ${dibujoAhorcado(game.partesDelMuñeco())}
    <p data-testid="word">${game.palabraEnmascarada()}</p>
    <p data-testid="lives">${game.vidas()}</p>
    <p data-testid="message">${mensajeFin || mensaje}</p>
    <input type="text" maxlength="1" placeholder="Letra" />
    <button>Adivinar</button>
    ${game.terminado() ? '<button>Jugar de nuevo</button>' : ""}
  `;

  const input = root.querySelector("input")!;
  const btnAdivinar = root.querySelector("button")!;

  const handleGuess = () => {
    const letra = input.value.trim();
    if (!letra) return;
    const resultado = game.adivinar(letra);
    input.value = "";
    const aviso =
      resultado === "repetida" ? "Letra ya ingresada" :
      resultado === "invalida" ? "Entrada inválida" : "";
    render(root, game, getWord, aviso);
  };

  btnAdivinar.addEventListener("click", handleGuess);
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") handleGuess();
  });

  const btnReiniciar = root.querySelector("button:last-of-type");
  if (btnReiniciar && btnReiniciar !== btnAdivinar) {
    btnReiniciar.addEventListener("click", () => {
      iniciarPartida(root, getWord);
    });
  }
}
