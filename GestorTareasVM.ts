import { Tarea } from "./Tarea";


export class GestorTareasVM {
  tareas: Tarea[];       // Lista de tareas
  idActual: number;      // ID que se incrementa para nuevas tareas

  constructor() {
    this.tareas = [];    // Inicializa la lista vacía
    this.idActual = 1;   // Empieza con el ID 1
  }

  // Añade una nueva tarea con el título dado
  añadirTarea(titulo: string): void {
    const nueva = new Tarea(this.idActual, titulo);
    this.tareas.push(nueva);  // Agrega la tarea a la lista
    this.idActual++;          // Aumenta el ID para la siguiente tarea
  }

  // Marca una tarea como completada usando su ID
  completarTarea(id: number): void {
    for (let tarea of this.tareas) {
      if (tarea.id === id) {
        tarea.completado = true; // Cambia el estado a "completado"
      }
    }
  }

  // Devuelve la lista completa de tareas
  obtenerTareas(): Tarea[] {
    return this.tareas;
  }
}
