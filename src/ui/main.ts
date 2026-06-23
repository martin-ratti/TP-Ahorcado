import { Ahorcado } from "../domain/Ahorcado";

export function mountApp(root: HTMLElement, word: string): void {
  const game = new Ahorcado(word);
  render(root, game);
}

function render(root: HTMLElement, game: Ahorcado): void {
  const mensaje = game.ganado() ? "GANASTE" : game.perdido() ? "PERDISTE" : "";

  root.innerHTML = `
    <h1>Ahorcado</h1>
    <p data-testid="word">${game.palabraEnmascarada()}</p>
    <p data-testid="lives">${game.vidas()}</p>
    <p data-testid="message">${mensaje}</p>
    <input type="text" maxlength="1" placeholder="Letra" />
    <button>Adivinar</button>
  `;

  const input = root.querySelector("input")!;
  const button = root.querySelector("button")!;

  const handleGuess = () => {
    const letra = input.value.trim();
    if (!letra) return;
    game.adivinar(letra);
    input.value = "";
    render(root, game);
  };

  button.addEventListener("click", handleGuess);
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") handleGuess();
  });
}
