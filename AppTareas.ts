import { GestorTareasVM } from "./GestorTareasVM";

// Importa prompt-sync
const prompt = require("prompt-sync")();

export class AppTareas {
  gestor: GestorTareasVM;

  constructor(gestor: GestorTareasVM) {
    this.gestor = gestor;
  }

  // Captura el título de una tarea desde consola
  capturarEntrada(): string {
    const entrada = prompt("📝 Escribe una nueva tarea: ");
    return entrada;
  }

  // Captura un ID para completar tarea
  capturarIdTarea(): number {
    const entrada = prompt("🔢 Ingresa el ID de la tarea que completaste: ");
    return parseInt(entrada);
  }

  // Muestra tareas con estado
  mostrarTareas(): void {
    const tareas = this.gestor.obtenerTareas();
    for (let tarea of tareas) {
      const estado = tarea.completado ? "✔" : "✘";
      console.log(`${estado} ${tarea.id}: ${tarea.titulo}`);
    }
  }
}
