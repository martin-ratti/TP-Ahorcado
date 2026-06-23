export class Ahorcado {
  private readonly palabra: string;
  private letrasAdivinadas: Set<string> = new Set();
  private letrasErradas: Set<string> = new Set();
  private readonly vidasIniciales = 6;

  constructor(palabra: string) {
    this.palabra = palabra.toUpperCase();
  }

  adivinar(letra: string): void {
    const l = letra.toUpperCase();
    if (this.terminado()) return;
    if (this.letrasAdivinadas.has(l) || this.letrasErradas.has(l)) return;

    if (this.palabra.includes(l)) {
      this.letrasAdivinadas.add(l);
    } else {
      this.letrasErradas.add(l);
    }
  }

  palabraEnmascarada(): string {
    return this.palabra
      .split("")
      .map((c) => (this.letrasAdivinadas.has(c) ? c : "_"))
      .join(" ");
  }

  vidas(): number {
    return this.vidasIniciales - this.letrasErradas.size;
  }

  ganado(): boolean {
    return this.palabra.split("").every((c) => this.letrasAdivinadas.has(c));
  }

  perdido(): boolean {
    return this.vidas() === 0;
  }

  terminado(): boolean {
    return this.ganado() || this.perdido();
  }
}
