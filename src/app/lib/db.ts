// Simulacion de base de datos en memoria
export const db = {
    nombre: "",
    respuestas: {} as Record<number, string>,
};

// Metodos para acceder a la "base de datos"
export const guardarNombre = (nombre: string) => {
    db.nombre = nombre;
};

export const obtenerNombre = () => db.nombre;

export const guardarRespuesta = (pregunta: number, respuesta: string) => {
    db.respuestas[pregunta] = respuesta;
};

export const obtenerRespuestas = () => db.respuestas;

export const reiniciarDatos = () => {
    db.nombre = "";
    db.respuestas = {};
};
