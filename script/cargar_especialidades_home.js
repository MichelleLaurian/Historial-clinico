console.log("cargar_especialidades_home js conectado")

const especialidades_contenido = document.querySelector(".especialidades-contenido");


function obtenerEspecialidades() {
    return fetch("/db/especialidades_medicas.json")
                .then( response => response.json())
                .catch( error => console.log(error));
}
function mostrarEspecialidadesHomeHTML() {
    obtenerEspecialidades()
        .then( especialidades => {

            for(let i=0; i<4; i++){
                const {id, titulo} = especialidades[i];

                const especialidad_div = document.createElement("div");
                especialidad_div.classList.add("especialidad");

                especialidad_div.innerHTML = `
                <div class="img-contenedor">
                    <img src="/img/especialidades/${titulo}.JPG" alt="${titulo}">
                </div>
                <div class="info-especialidad">
                    <h3 class="titulo">${titulo}</h3>
                    <a href="#" class="boton" data-id=${id}>+ Info</a>
                </div>
                `

                especialidades_contenido.appendChild(especialidad_div)
            }
        })
        .catch( error => console.log(error));
}

function listeners() {
    mostrarEspecialidadesHomeHTML();
}

document.addEventListener("DOMContentLoaded", listeners);
