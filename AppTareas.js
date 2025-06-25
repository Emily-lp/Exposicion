"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppTareas = void 0;
// Importa prompt-sync
var prompt = require("prompt-sync")();
var AppTareas = /** @class */ (function () {
    function AppTareas(gestor) {
        this.gestor = gestor;
    }
    // Captura el título de una tarea desde consola
    AppTareas.prototype.capturarEntrada = function () {
        var entrada = prompt("📝 Escribe una nueva tarea: ");
        return entrada;
    };
    // Captura un ID para completar tarea
    AppTareas.prototype.capturarIdTarea = function () {
        var entrada = prompt("🔢 Ingresa el ID de la tarea que completaste: ");
        return parseInt(entrada);
    };
    // Muestra tareas con estado
    AppTareas.prototype.mostrarTareas = function () {
        var tareas = this.gestor.obtenerTareas();
        for (var _i = 0, tareas_1 = tareas; _i < tareas_1.length; _i++) {
            var tarea = tareas_1[_i];
            var estado = tarea.completado ? "✔" : "✘";
            console.log("".concat(estado, " ").concat(tarea.id, ": ").concat(tarea.titulo));
        }
    };
    return AppTareas;
}());
exports.AppTareas = AppTareas;
