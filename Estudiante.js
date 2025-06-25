"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Estudiante = void 0;
var AppTareas_1 = require("./AppTareas");
var GestorTareasVM_1 = require("./GestorTareasVM");
// Clase que representa al estudiante que usa la app
var Estudiante = /** @class */ (function () {
    function Estudiante(nombre, correo) {
        var gestor = new GestorTareasVM_1.GestorTareasVM(); // Crea un ViewModel
        this.app = new AppTareas_1.AppTareas(gestor); // Crea la vista y la enlaza con el gestor
        this.nombre = nombre;
        this.correo = correo;
    }
    // Método para usar la aplicación
    Estudiante.prototype.usarApp = function () {
        var titulo = this.app.capturarEntrada(); // Captura una nueva tarea
        this.app.gestor.añadirTarea(titulo); // La añade a la lista
        this.app.mostrarTareas(); // Muestra todas las tareas
    };
    return Estudiante;
}());
exports.Estudiante = Estudiante;
