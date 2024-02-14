// declaramos nuestras variables
const inputTitulo = document.querySelector(".titulo");
const inputAutor = document.querySelector(".autor");
const inputGenero = document.querySelector(".genero");
const containerBooks = document.getElementById("containerBooks");
const form = document.getElementById("formulario");
let nextBookId = 0; // Identificador único para cada libro
let myLibrary = [];

// construimos nuestra clase book
class Book {
  constructor(id, author, title, genre, read) {
    this.id = id;
    this.author = author;
    this.title = title;
    this.genre = genre;
    this.read = read;
  }
}

// asignamos los eventos a los input
function addBook() {
  inputAutor.addEventListener("blur", validar);
  inputTitulo.addEventListener("blur", validar);
  inputGenero.addEventListener("blur", validar);

  const readElement = document.querySelector(".read");
  readElement.addEventListener("change", () => {
    if (readElement.checked) {
      readElement.textContent = "Leído";
    } else {
      readElement.textContent = "No leído";
    }
  });
}
addBook();

// validamos los campos del form
function validar(e) {
  if (e.target.value === "") {
    mostrarAlerta(`El ${e.target.id} es obligatorio`, e.target.parentElement);
    return;
  }
  limpiarAlerta(e.target.parentElement);
}

// si no estan completo se activa una alerta
function mostrarAlerta(mensaje, referencia) {
  limpiarAlerta(referencia);
  const mensajeError = document.createElement("p");
  mensajeError.classList.add(
    "alert",
    "alert-danger",
    "role=alert",
    "p-2",
    "text-center",
    "mt-2"
  );
  mensajeError.textContent = mensaje;
  referencia.appendChild(mensajeError);
}

// limpiaamos html antes de mostrar
function limpiarAlerta(referencia) {
  const alerta = referencia.querySelector(".alert");
  if (alerta) {
    alerta.remove();
  }
}

function addBookLibrary() {
  let author = inputAutor.value;
  let title = inputTitulo.value;
  let genre = inputGenero.value;
  let read = document.querySelector(".read").checked ? "Leído" : "No leído";

  if (author === "" || title === "" || genre === "") {
    const error = document.createElement("p");
    error.classList.add(
      "mt-2",
      "alert",
      "bg-danger",
      "p-2",
      "text-center",
      "text-white"
    );
    error.textContent = "Los datos están vacíos, complételos por favor";
    form.appendChild(error);

    setTimeout(() => {
      error.remove();
    }, 2000);
    return;
  }
  const nuevoBook = new Book(nextBookId, author, title, genre, read);
  myLibrary.push(nuevoBook);
  console.log(myLibrary);

  pintarBookHtml(nuevoBook);
  nextBookId++; // Incrementar el identificador para el próximo libro
  form.reset();
}

// inyectamos libros al html
function pintarBookHtml(book) {
  const card = `
 <div class="col"> 
   <div class="card h-100 shadow-sm p-1" data-book-id="${book.id}" >
    <div class="card-body">
     <h5 class="card-title">Autor: ${book.author}</h5>
     <h6 class="card-subtitle mb-2 text-muted">Título: ${book.title}</h6>
     <p class="card-text">Género: ${book.genre}</p>
     <p  class="card-text">Read: ${book.read}</p>
     <a href="#" class="eliminar btn btn-danger">Eliminar</a>
     </div>
    <div>
   </div>
`;
  containerBooks.insertAdjacentHTML("afterbegin", card);
  form.reset();
  const eliminarBtn = containerBooks.querySelector(
    `.card[data-book-id="${book.id}"] .eliminar`
  );
  
  eliminarBtn.addEventListener("click", (event) => {
    const target = event.target.parentNode.parentNode;
    const bookId = parseInt(target.getAttribute("data-book-id"));
    target.remove();
    eliminarBookFromLibrary(bookId);
  });
}
// eliminamos libros del html
function eliminarBookFromLibrary(bookId) {
  myLibrary = myLibrary.filter((book) => book.id !== bookId);
}

function limpiarHtml() {
  while (containerBooks.firstChild) {
    containerBooks.removeChild(containerBooks.firstChild);
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addBookLibrary();
});
