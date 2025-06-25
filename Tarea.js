"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tarea = void 0;
// Clase que representa una tarea individual
var Tarea = /** @class */ (function () {
    function Tarea(id, titulo) {
        this.id = id;
        this.titulo = titulo;
        this.completado = false; // Por defecto, la tarea no está completada
    }
    return Tarea;
}());
exports.Tarea = Tarea;
