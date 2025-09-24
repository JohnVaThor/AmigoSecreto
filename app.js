//Lógica de Programación del Challenge

// Arreglo para almacenar los amigos
const amigos = [];

// (opcional) función para volver a pintar la lista en el DOM
function renderLista() {
  const lista = document.getElementById("listaAmigos");
  if (!lista) return;
  lista.innerHTML = "";
  for (const nombre of amigos) {
    const li = document.createElement("li");
    li.textContent = nombre;
    lista.appendChild(li);
  }
}

// Función para agregar un amigo (llamada desde el botón "Añadir")
function agregarAmigo() {
  // 1) Capturar el valor del campo de entrada
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();

  // 2) Validar la entrada
  if (nombre === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }

  // 3) Actualizar el array de amigos
  amigos.push(nombre);

  // Actualizar la lista visible (opcional pero útil)
  renderLista();

  // 4) Limpiar el campo de entrada
  input.value = "";
  input.focus();
}

// Tu HTML tiene un botón que llama a sortearAmigo(), así que la definimos
function sortearAmigo() {
  if (amigos.length === 0) {
    alert("No hay amigos para sortear. Agrega al menos uno.");
    return;
  }

  const indice = Math.floor(Math.random() * amigos.length);
  const elegido = amigos[indice];

  const resultado = document.getElementById("resultado");
  if (resultado) {
    resultado.innerHTML = "";
    const li = document.createElement("li");
    li.textContent = `Amigo secreto: ${elegido}`;
    resultado.appendChild(li);
  } else {
    // por si no existe la lista de resultado
    alert(`Amigo secreto: ${elegido}`);
  }
}
