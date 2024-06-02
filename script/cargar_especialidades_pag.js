console.log("cargar_especialidades_pag js conectado")

const especialidades_contenido = document.querySelector(".especialidades-pag-contenido");


function obtenerEspecialidades() {
    return fetch("/db/especialidades_medicas.json")
                .then( response => response.json())
                .catch( error => console.log(error));
}
function mostrarEspecialidadesHomeHTML() {
    obtenerEspecialidades()
        .then( especialidades => {

            especialidades.forEach((especialidad) => {
                const { id, titulo, descripcion } = especialidad;

                const especialidad_div = document.createElement("div");
                especialidad_div.classList.add("especialidad-pag");

                especialidad_div.innerHTML = `
                                <div class="img-contenedor">
                                    <img src="/img/especialidades/${titulo}.jpg" alt="infectologia">
                                </div>
                                <div class="info">
                                    <h3 class="titulo">Cardiología</h3>
                                    <p class="texto">${descripcion}</p>
                                </div>
                                `;

                especialidades_contenido.appendChild(especialidad_div);
            });
        })
        .catch( error => console.log(error));
}

function listeners() {
    mostrarEspecialidadesHomeHTML();
}

document.addEventListener("DOMContentLoaded", listeners);


