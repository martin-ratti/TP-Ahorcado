# language: es
Característica: Pantalla de inicio

  Escenario: El jugador inicia una partida desde la pantalla de inicio
    Dado que el jugador entra a la app con la palabra "GATO"
    Entonces se ve la pantalla de inicio
    Y se ve el botón "Jugar"
    Cuando el jugador inicia la partida
    Entonces se ve la palabra "_ _ _ _"
    Y se ven 6 vidas