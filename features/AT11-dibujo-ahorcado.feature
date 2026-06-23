# language: es
Característica: Dibujo progresivo del ahorcado

  Escenario: Sin errores no se muestra ninguna parte del muñeco
    Dado una partida con la palabra "GATO"
    Entonces se ven 0 partes del muñeco

  Escenario: Con un error se muestra la cabeza
    Dado una partida con la palabra "GATO"
    Cuando el jugador adivina la letra "E"
    Entonces se ven 1 partes del muñeco

  Escenario: Con 6 errores se muestra el muñeco completo
    Dado una partida con la palabra "OSO"
    Cuando el jugador adivina la letra "A"
    Y el jugador adivina la letra "B"
    Y el jugador adivina la letra "C"
    Y el jugador adivina la letra "D"
    Y el jugador adivina la letra "E"
    Y el jugador adivina la letra "F"
    Entonces se ven 6 partes del muñeco
