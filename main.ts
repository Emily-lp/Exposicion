import { Estudiante } from "./Estudiante";
const prompt = require("prompt-sync")(); // Librería para capturar texto desde consola

// 📥 Capturar datos del estudiante
const nombre = prompt("👤 Escribe tu nombre: ");
const correo = prompt("📧 Escribe tu correo: ");

const estudiante = new Estudiante(nombre, correo);

console.log(`\n🎓 Bienvenido/a, ${estudiante.nombre}! Vamos a gestionar tus tareas.`);

// 🔁 Ingresar varias tareas
while (true) {
  const titulo = prompt("📝 Escribe una nueva tarea (o escribe 'salir' para terminar): ");
  if (titulo.toLowerCase() === "salir") break;

  estudiante.app.gestor.añadirTarea(titulo);
}

// 📋 Mostrar todas las tareas ingresadas
console.log("\n📚 Tareas registradas:");
estudiante.app.mostrarTareas();

// ✅ Marcar tareas como completadas (una o varias)
while (true) {
  const id = parseInt(prompt("\n🔢 Ingresa el ID de la tarea que completaste: "));
  estudiante.app.gestor.completarTarea(id);

  console.log("\n📌 Tareas actualizadas:");
  estudiante.app.mostrarTareas();

  const opcion = prompt("\n✅ ¿Deseas marcar otra tarea como completada? (sí/no): ");
  if (opcion.toLowerCase() !== "sí") break;
}

// 🎉 Final del programa
console.log("\n🎯 Todas tus tareas han sido gestionadas. ¡Buen trabajo!");
