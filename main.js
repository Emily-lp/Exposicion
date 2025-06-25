"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Estudiante_1 = require("./Estudiante");
var prompt = require("prompt-sync")(); // Librería para capturar texto desde consola
// 📥 Capturar datos del estudiante
var nombre = prompt("👤 Escribe tu nombre: ");
var correo = prompt("📧 Escribe tu correo: ");
var estudiante = new Estudiante_1.Estudiante(nombre, correo);
console.log("\n\uD83C\uDF93 Bienvenido/a, ".concat(estudiante.nombre, "! Vamos a gestionar tus tareas."));
// 🔁 Ingresar varias tareas
while (true) {
    var titulo = prompt("📝 Escribe una nueva tarea (o escribe 'salir' para terminar): ");
    if (titulo.toLowerCase() === "salir")
        break;
    estudiante.app.gestor.añadirTarea(titulo);
}
// 📋 Mostrar todas las tareas ingresadas
console.log("\n📚 Tareas registradas:");
estudiante.app.mostrarTareas();
// ✅ Marcar tareas como completadas (una o varias)
while (true) {
    var id = parseInt(prompt("\n🔢 Ingresa el ID de la tarea que completaste: "));
    estudiante.app.gestor.completarTarea(id);
    console.log("\n📌 Tareas actualizadas:");
    estudiante.app.mostrarTareas();
    var opcion = prompt("\n✅ ¿Deseas marcar otra tarea como completada? (sí/no): ");
    if (opcion.toLowerCase() !== "sí")
        break;
}
// 🎉 Final del programa
console.log("\n🎯 Todas tus tareas han sido gestionadas. ¡Buen trabajo!");
