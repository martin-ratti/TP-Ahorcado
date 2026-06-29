# language: es
Característica: Modo Dos Jugadores

  Escenario: Un jugador crea una palabra secreta y otro la adivina
    Dado que el jugador entra al modo "Dos Jugadores"
    Cuando el jugador ingresa la palabra secreta "MURCIELAGO"
    Y opcionalmente ingresa la pista "Animal nocturno"
    Y inicia la partida
    Entonces la pantalla de juego se muestra correctamente
    Y la palabra enmascarada contiene 10 letras ocultas

  Escenario: Jugar de nuevo en modo dos jugadores vuelve a la pantalla de dos jugadores
    Dado que el jugador entra al modo "Dos Jugadores"
    Cuando el jugador ingresa la palabra secreta "OSO"
    Y opcionalmente ingresa la pista ""
    Y inicia la partida
    Y el jugador adivina la letra "O"
    Y el jugador adivina la letra "S"
    Entonces se ve el mensaje "GANASTE"
    Cuando el jugador presiona "Jugar de nuevo"
    Entonces se ve la pantalla de dos jugadores
