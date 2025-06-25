"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GestorTareasVM = void 0;
var Tarea_1 = require("./Tarea");
var GestorTareasVM = /** @class */ (function () {
    function GestorTareasVM() {
        this.tareas = []; // Inicializa la lista vacía
        this.idActual = 1; // Empieza con el ID 1
    }
    // Añade una nueva tarea con el título dado
    GestorTareasVM.prototype.añadirTarea = function (titulo) {
        var nueva = new Tarea_1.Tarea(this.idActual, titulo);
        this.tareas.push(nueva); // Agrega la tarea a la lista
        this.idActual++; // Aumenta el ID para la siguiente tarea
    };
    // Marca una tarea como completada usando su ID
    GestorTareasVM.prototype.completarTarea = function (id) {
        for (var _i = 0, _a = this.tareas; _i < _a.length; _i++) {
            var tarea = _a[_i];
            if (tarea.id === id) {
                tarea.completado = true; // Cambia el estado a "completado"
            }
        }
    };
    // Devuelve la lista completa de tareas
    GestorTareasVM.prototype.obtenerTareas = function () {
        return this.tareas;
    };
    return GestorTareasVM;
}());
exports.GestorTareasVM = GestorTareasVM;
