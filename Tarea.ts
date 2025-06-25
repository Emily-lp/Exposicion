// Clase que representa una tarea individual
export class Tarea {
  id: number;            // Identificador de la tarea
  titulo: string;        // Descripción de la tarea
  completado: boolean;   // Estado de la tarea, "boolean" quiere decir que solo puede emitir dos respuestas true o false 

  constructor(id: number, titulo: string) {
    this.id = id;
    this.titulo = titulo;
    this.completado = false; // Por defecto, la tarea no está completada
  }
}
