# language: es
Característica: Marcador de la sesión

  Escenario: El marcador acumula victorias y derrotas entre partidas consecutivas
    Dado una partida con la palabra "OSO"
    Cuando el jugador adivina la letra "O"
    Y el jugador adivina la letra "S"
    Entonces se ve el mensaje "GANASTE"
    Y se ve el marcador de la sesión con 1 victoria y 0 derrota
    Cuando el jugador presiona "Jugar de nuevo"
    Y el jugador adivina la letra "A"
    Y el jugador adivina la letra "B"
    Y el jugador adivina la letra "C"
    Y el jugador adivina la letra "D"
    Y el jugador adivina la letra "E"
    Y el jugador adivina la letra "F"
    Entonces se ve el mensaje "PERDISTE"
    Y se ve el marcador de la sesión con 1 victoria y 1 derrota