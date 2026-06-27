# language: es
Característica: Modo Dos Jugadores

  Escenario: Un jugador crea una palabra secreta y otro la adivina
    Dado que el jugador entra al modo "Dos Jugadores"
    Cuando el jugador ingresa la palabra secreta "MURCIELAGO"
    Y opcionalmente ingresa la pista "Animal nocturno"
    Y inicia la partida
    Entonces la pantalla de juego se muestra correctamente
    Y la palabra enmascarada contiene 10 letras ocultas
