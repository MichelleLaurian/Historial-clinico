console.log("cargar centros js conectado")

const lista_select = document.querySelector(".cedes .lista-cedes");
// const opcion = document.querySelector(".cedes .lista-cedes option");
const iframe = document.querySelector(".cedes iframe");


function obtenerCentros() {
    return fetch("/db/centros_de_atencion.json")
                .then( response => response.json())
                .catch( error => console.log(error));
}
function mostrarCentrosHTML() {
    obtenerCentros()
        .then( centros => {
            centros.forEach( centro => {
                const opcion = document.createElement("option");
                    opcion.value = `${centro.id}`;
                    opcion.textContent = `${centro.nombre}`
                    lista_select.appendChild(opcion);
            })
        } )
}

function actualizarIframe(e) {
    const id = e.target.value;

    obtenerCentros()
        .then( centros => {
            centros.forEach( centro => {
                if(centro.id == id) {
                    iframe.src = centro.iframe;
                }
            })
        })
}

function listeners() {
    mostrarCentrosHTML();
}

document.addEventListener("DOMContentLoaded", listeners);
lista_select.addEventListener("change", actualizarIframe);