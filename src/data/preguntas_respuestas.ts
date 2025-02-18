export interface Opcion {
  texto: string;
  aptitud: string;
}

export interface Pregunta {
  id: number;
  pregunta: string;
  opciones: Opcion[];
}

export const preguntas: Pregunta[] = [
  {
    id: 1,
    pregunta: "¿Qué prefieres hacer en tu tiempo libre?",
    opciones: [
      { texto: "Leer un libro misterioso", aptitud: "Intelectual" },
      { texto: "Ver películas y analizar cada escena", aptitud: "Cinéfilo" },
      { texto: "Jugar videojuegos hasta la madrugada", aptitud: "Gamer" },
      { texto: "Salir a caminar sin rumbo", aptitud: "Explorador" },
    ],
  },
  {
    id: 2,
    pregunta: "Si pudieras dominar un hechizo, ¿cuál sería?",
    opciones: [
      { texto: "Llamas infinitas para hacer asados", aptitud: "Chef_Mágico" },
      { texto: "Convertir cualquier objeto en dinero", aptitud: "Ambicioso" },
      { texto: "Atravesar las paredes", aptitud: "Soñador" },
      { texto: "Volar, pero a 3 km/h", aptitud: "Aventurero" },
    ],
  },
  {
    id: 3,
    pregunta: "Si tuvieras que elegir solo un juego de mesa, ¿cuál sería?",
    opciones: [
      { texto: "Monopoly", aptitud: "Estratega" },
      { texto: "Ajedrez", aptitud: "Intelectual" },
      { texto: "Mario Kart", aptitud: "Divertido" },
      { texto: "Jenga", aptitud: "Hábil" },
    ],
  },
  {
    id: 4,
    pregunta: "¿Cuál es tu clima favorito?",
    opciones: [
      { texto: "Sol abrasador", aptitud: "Energético" },
      { texto: "Lluvia y café", aptitud: "Reflexivo" },
      { texto: "Frío elegante", aptitud: "Clásico" },
      { texto: "Viento épico", aptitud: "Épico" },
    ],
  },
  {
    id: 5,
    pregunta: "¿Cuál tipo de comida se antoja más?",
    opciones: [
      { texto: "Pizza", aptitud: "Casual" },
      { texto: "Sushi", aptitud: "Exótico" },
      { texto: "Casero típico", aptitud: "Reconfortante" },
      { texto: "Postres azucarados", aptitud: "Dulce" },
    ],
  },
  {
    id: 6,
    pregunta: "Si fueras un personaje de una película, ¿cómo te describirían?",
    opciones: [
      {
        texto: "Un héroe con grandes poderes pero pésima puntería",
        aptitud: "Héroe _Despistado",
      },
      {
        texto: "Un personaje cómico con frases icónicas",
        aptitud: "Carismático",
      },
      {
        texto: "Un explorador que encuentra atajos imposibles",
        aptitud: "Descubridor",
      },
      {
        texto: "Un Extra que accidentalmente se vuelve el protagonista",
        aptitud: "Accidentalmente_Famoso",
      },
    ],
  },
];

export const descripcionesAptitudes: Record<string, string> = {
  Intelectual: "analítico y siempre en busca de conocimiento",
  Cinéfilo: "observador con gran atención al detalle",
  Gamer: "competitivo, con reflejos rápidos",
  Explorador: "aventurero, amante de lo desconocido",
  Chef_Mágico: "creativo en la cocina y experimentador de sabores",
  Ambicioso: "determinado, con visión a futuro",
  Soñador: "imaginativo, con ideas sin límites",
  Aventurero: "intrépido, amante del riesgo",
  Estratega: "metódico, planifica cada paso",
  Hábil: "preciso, con gran destreza",
  Reflexivo: "tranquilo, con profundidad de pensamiento",
  Clásico: "elegante, con gusto refinado",
  Épico: "audaz, con espíritu legendario",
  Casual: "sociable y relajado en cualquier ambiente",
  Exótico: "innovador, siempre dispuesto a probar lo nuevo",
  Reconfortante: "acogedor, transmite calidez",
  Dulce: "alegre, con una actitud optimista",
  Héroe_Despistado: "valiente, aunque un poco torpe",
  Carismático: "encantador, con una energía contagiosa",
  Divertido: "entretenido, con un gran sentido del humor",
  Descubridor: "curioso, con ganas de explorar y aprender",
  Accidentalmente_Famoso: "popular sin siquiera intentarlo",
};
