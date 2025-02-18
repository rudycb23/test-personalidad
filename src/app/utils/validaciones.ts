export function esNumeroValido(id: number, max: number): boolean {
  return !isNaN(id) && id > 0 && id <= max;
}
