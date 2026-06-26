# language: es
Característica: Pistas y categorías

  Escenario: El jugador ve la pista asociada a la palabra
    Dado que el jugador entra a la app con la palabra "GATO" y pista "Felino"
    Cuando el jugador inicia la partida
    Y el jugador pide una pista
    Entonces se ve el mensaje "Pista: Felino"
