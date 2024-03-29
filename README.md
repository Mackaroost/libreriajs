## Proyecto "Librería"

### Descripción

Este proyecto, denominado "Librería", fue desarrollado como parte de un ejercicio propuesto por la plataforma de aprendizaje "The Odin Project". La finalidad de este desafío es crear una aplicación web que permita ingresar libros con sus respectivos autores, títulos, géneros y estados de lectura, y visualizarlos en una interfaz web.

### Estructura Lógica

#### Clase Book

La lógica principal del proyecto se centra en la creación de la clase Book, que representa la estructura de un libro con sus atributos esenciales como `author`,  `title`,  `genre` y `read`. Además, se asigna un `id` único a cada libro para facilitar su identificación.

#### Eventos y Validación

El código incluye funciones para gestionar eventos en los campos del formulario, como la detección de cambios en la casilla de lectura (`read`). También se implementa una validación básica para asegurarse de que los campos de autor, título y género no estén vacíos.

#### Manipulación del DOM

La manipulación del DOM se realiza principalmente en la función `pintarBookHtml`, que crea tarjetas de libro (card) dinámicamente y las inserta en el contenedor correspondiente. Además, se añaden funcionalidades para eliminar libros del contenedor y de la colección en la memoria.

### Técnicas de Programación

-   **Programación Orientada a Objetos:** El código sigue prácticas de programación orientada a objetos al definir la clase Book.
-   **Eventos y Funciones:** Incorpora eventos y funciones para mejorar la interactividad y proporcionar una experiencia de usuario más amigable.

### Técnicas de Estilos

-   **Bootstrap:** Se utiliza la biblioteca Bootstrap para darle estilo a la interfaz de usuario. La estructura visual se organiza mediante clases y componentes de Bootstrap para lograr una apariencia limpia y atractiva.

### Manejo del DOM

-   **JavaScript:** El proyecto utiliza JavaScript para interactuar con el DOM. La creación dinámica de elementos, la asignación de eventos y la manipulación del contenido del formulario y del contenedor de libros son aspectos clave del manejo del DOM.

## Demostración de Interfaz Gráfica

**Página de Inicio:**
La imagen muestra la página de inicio de la aplicación.
Página de Inicio: ![paginadeInicio](https://github.com/Mackaroost/libreriajs/assets/101475126/743f92e7-cee9-4878-8f9e-fe6669ae9f12)

**Otras Funcionalidades:**

-   **Página de detalles del libro:** Muestra información detallada sobre un libro específico, como autor, título, género, sinopsis, etc.
-   **Formulario de búsqueda:** Permite buscar libros por autor, título o género.

**Tecnologías Utilizadas:**

-   **HTML:** Para la estructura básica de la página.
-   **CSS:** Para el diseño y la presentación de la página.
-   **JavaScript:** Para la interactividad de la página.
-   **Bootstrap:** Framework CSS para facilitar el desarrollo de la interfaz.

### Instrucciones de Uso

1.  Abre el link: https://mackaroost.github.io/libreriajs/ en tu navegador web.
2.  Ingresa los detalles del libro en los campos del formulario.
3.  Haz clic en "Agregar Libro" para añadir el libro a la librería.
4.  Los libros se mostrarán en tarjetas con información detallada.
5.  Puedes marcar libros como leídos o no leídos mediante la casilla de verificación.
6.  Para eliminar un libro, haz clic en el botón "Eliminar" en la tarjeta correspondiente.

### ¡Disfruta gestionando tu librería personal!

**Nota:** Puedes personalizar la aplicación a tu gusto, modificar el diseño, agregar funcionalidades adicionales o utilizar otras bibliotecas para el manejo del DOM y la presentación visual.
