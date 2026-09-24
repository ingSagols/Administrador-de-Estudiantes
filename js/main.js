class Estudiante {
    constructor(id, nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
        this.id = id;
    }
}

const estudiantes = [];
let contadorId = 1;

const boton = document.getElementById("btnAgregar");
const inputNombre = document.getElementById("nombre");
const inputEdad = document.getElementById("edad");
const contenedor = document.getElementById("estudiantesRegistrados");


boton.addEventListener("click", () => {
    const nombre = inputNombre.value;
    const edad = inputEdad.value;

    if (nombre.trim() === "" || edad === "") {
        alert("Completa todos los campos");
        return;
    }

    if (edad < 1 || edad > 120) {
        alert("La edad debe ser un número válido (1-120)");
        return;
    }

    const nuevoEstudiante = new Estudiante(contadorId, nombre, edad);
    estudiantes.push(nuevoEstudiante);
    contadorId++;

    contenedor.innerHTML = "";
    estudiantes.forEach((est) => {
        contenedor.innerHTML += `
        <div class="estudiante-card">
            ${est.nombre} - ${est.edad} años
        </div>
    `;
    });

    inputNombre.value = "";
    inputEdad.value = "";
});


