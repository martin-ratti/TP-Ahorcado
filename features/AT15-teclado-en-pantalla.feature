# language: es
Característica: Teclado en pantalla

  Escenario: Las letras usadas se deshabilitan en el teclado virtual
    Dado una partida con la palabra "GATO"
    Cuando el jugador adivina la letra "A"
    Entonces la tecla "A" está deshabilitada
    Y la tecla "B" está habilitada
