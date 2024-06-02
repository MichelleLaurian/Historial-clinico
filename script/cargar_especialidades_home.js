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
                `;

                const btn = especialidad_div.querySelector(".boton");
                btn.onclick = (e) => {
                    crearModalEspecialidad(e);
                }
                especialidades_contenido.appendChild(especialidad_div);
            }
            
            
        })
        .catch( error => console.log(error));
    }
    
function crearModalEspecialidad(e){
    e.preventDefault();
    const id = e.target.getAttribute("data-id");

    obtenerEspecialidades()
    .then( especialidades => {
        
        const especialidad = especialidades.filter(especialidad => especialidad.id == id);
        
        const {titulo, descripcion} = especialidad[0];
        const body = document.querySelector("body");
        
        const contenido = document.createElement("div");
        contenido.classList.add("contenido-modal");
        
        const h3 = document.createElement("h3");
        h3.textContent = titulo;
        const parrafo = document.createElement("p");
        parrafo.textContent = descripcion;
        
        contenido.appendChild(h3);
        contenido.appendChild(parrafo);

        const modal = document.createElement("div");
        modal.classList.add("modal");
        modal.appendChild(contenido);
        
        body.appendChild(modal);

        body.classList.add("noScroll");
        body.onclick = () => {
            modal.remove();
            body.classList.remove("noScroll");
        }
        
    })
    .catch( error => console.log(error));
}

function listeners() {
    mostrarEspecialidadesHomeHTML();
}

document.addEventListener("DOMContentLoaded", listeners);
