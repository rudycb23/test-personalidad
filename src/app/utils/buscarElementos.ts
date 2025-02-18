import { elementos, ElementoQuimico } from "@/data/elementos_quimicos";
import { capitalizar } from "@/app/utils/formatText";

export function buscarElementos(nombre: string): ElementoQuimico[] {
  let encontrados = new Set<ElementoQuimico>();

  for (let i = 0; i < nombre.length; i++) {
    for (let j = 1; j <= 2 && i + j <= nombre.length; j++) {
      const simbolo = nombre.slice(i, i + j);
      const elemento = elementos.find(
        (el) => el.simbolo === capitalizar(simbolo)
      );
      if (elemento) {
        encontrados.add(elemento);
      }
    }
  }

  return Array.from(encontrados);
}
