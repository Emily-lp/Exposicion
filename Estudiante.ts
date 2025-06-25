import { AppTareas } from "./AppTareas";
import { GestorTareasVM } from "./GestorTareasVM";

// Clase que representa al estudiante que usa la app
export class Estudiante {
  nombre: string;           // Nombre del estudiante
  correo: string;           // Correo del estudiante
  app: AppTareas;         // La interfaz que usará

  constructor(nombre: string, correo: string) {
    const gestor = new GestorTareasVM();  // Crea un ViewModel
    this.app = new AppTareas(gestor);   // Crea la vista y la enlaza con el gestor
    this.nombre = nombre;
    this.correo = correo;
  }

  // Método para usar la aplicación
  usarApp(): void {
    const titulo = this.app.capturarEntrada();      // Captura una nueva tarea
    this.app.gestor.añadirTarea(titulo);            // La añade a la lista
    this.app.mostrarTareas();                       // Muestra todas las tareas
  }
}
