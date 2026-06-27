import { describe, expect, it } from 'vitest';
import { Ahorcado } from '../src/domain/Ahorcado';

describe('Ahorcado - modo dos jugadores', () => {
  it('inicia con la palabra ingresada manualmente y la pista opcional', () => {
    const juego = new Ahorcado('MURCIELAGO', 6, 'Animal nocturno');

    expect(juego.vidas()).toBe(6);
    expect(juego.palabraEnmascarada()).toBe('_ _ _ _ _ _ _ _ _ _');
    expect(juego.pista()).toBe('Animal nocturno');
  });
});
