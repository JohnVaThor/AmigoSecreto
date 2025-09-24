//Lógica de Programación del Challenge

// Arreglo para almacenar los amigos
const amigos = [];

// Función para agregar un amigo
function agregarAmigo() {
  // 1️⃣ Capturar el valor del campo de entrada
  const input = document.getElementById("nombreAmigo");
  const nombre = input.value.trim(); // Elimina espacios en blanco

  // 2️⃣ Validar la entrada
  if (nombre === "") {
    alert("Por favor, inserte un nombre.");
    return; // Detener la ejecución si el campo está vacío
  }

  // 3️⃣ Actualizar el array de amigos
  amigos.push(nombre);

  // (Opcional) Mostrar en la lista de la página si tienes un elemento <ul id="listaAmigos">
  const lista = document.getElementById("listaAmigos");
  if (lista) {
    const li = document.createElement("li");
    li.textContent = nombre;
    lista.appendChild(li);
  }

  // 4️⃣ Limpiar el campo de entrada
  input.value = "";
  input.focus(); // Devuelve el foco al campo de texto
}
