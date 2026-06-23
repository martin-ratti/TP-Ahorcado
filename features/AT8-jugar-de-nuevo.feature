# language: es
Característica: Jugar de nuevo

  Escenario: El jugador reinicia la partida sin recargar la página
    Dado una partida con la palabra "OSO"
    Cuando el jugador adivina la letra "O"
    Y el jugador adivina la letra "S"
    Entonces se ve el mensaje "GANASTE"
    Cuando el jugador presiona "Jugar de nuevo"
    Entonces se ve la palabra "_ _ _"
    Y se ven 6 vidas
    Y se ve el mensaje ""

  Escenario: Jugar de nuevo en modo aleatorio inicia una nueva partida jugable
    Dado una partida con la palabra "OSO"
    Cuando el jugador adivina la letra "A"
    Y el jugador adivina la letra "B"
    Y el jugador adivina la letra "C"
    Y el jugador adivina la letra "D"
    Y el jugador adivina la letra "E"
    Y el jugador adivina la letra "F"
    Entonces se ve el mensaje "PERDISTE"
    Cuando el jugador presiona "Jugar de nuevo"
    Entonces se ven 6 vidas
    Y se ve el mensaje ""
    Y la palabra tiene al menos una letra
