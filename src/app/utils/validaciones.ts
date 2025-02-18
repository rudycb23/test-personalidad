// Verifica si un valor es un número válido dentro de un rango permitido.
export function esNumeroValido(valor: string, max: number): boolean {
  const numero = parseInt(valor, 10);
  return !isNaN(numero) && numero > 0 && numero <= max;
}
