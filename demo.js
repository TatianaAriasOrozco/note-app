const notes = [
  "Asisitir a clase fundamentals",
  "Programar clase de inglés",
  "Sacar cita de mamá",
  "Sacar cita para el baño de los perros",
];

// Mostrar las notas iniciales
renderNotes();

// Capturar elemento en donde se ejecuta la nueva nota
const form = document.querySelector("form");

// Configurar qué pasa cuando ocurre el evento submit (nueva tarea)
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault(); // Elimina el comportamiento por defecto que realiza el navegador

  const form = event.target; // acceso al texto que ingresó el usuario
  const content = form.elements.newNote.value; // Guardar el valor de la nueva nota en una variable

  notes.push(content); //guardo el valor en el arreglo notes

  form.reset(); //resetea el formulario
  renderNotes();
}

function noteConteiner(note) {
  // Creo los elementos para la nueva nota
  const div = document.createElement("div");
  div.className = "note";

  const p = document.createElement("p");
  p.textContent = note; //se agrega al elemento p el contenido de la nota que fue enviado desde la función renderNotes

  const button = document.createElement("button");
  button.textContent = "Delete";

  button.addEventListener("click", function deleteNote() {
    const position = notes.indexOf(note);
    notes.splice(position, 1);  //Elimino la nota en la posición dada
    renderNotes();
  });
  
  div.append(p, button);
  return div; //retorna el elemento div con la nueva nota
}

function renderNotes() {
  const notesContainer = document.querySelector("#notes-container");
  notesContainer.innerHTML = "";

  for (let i = 0; i < notes.length; i++) {
    const note = notes[i];
    const newNote = noteConteiner(note);
    notesContainer.append(newNote);
  }
}
