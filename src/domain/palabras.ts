export const PALABRAS = [
  "GATO", "PERRO", "CABALLO", "ELEFANTE", "JIRAFA",
  "COCODRILO", "MARIPOSA", "TORTUGA", "MURCIELAGO", "DELFIN",
  "AGUILA", "PINGÜINO", "CAMELLO", "CANGURO", "LEON",
  "TIGRE", "OSO", "LOBO", "ZORRO", "MONO",
];

export function elegirPalabra(lista: string[], indice: number): string {
  return lista[indice];
}
