console.log("cargar centros js conectado")

const lista_select = document.querySelector(".cedes .lista-cedes");
// const opcion = document.querySelector(".cedes .lista-cedes option");
const iframe = document.querySelector(".cedes iframe");


function obtenerCentros() {
    return new Promise((resolve, reject) => {
        fetch("/db/centros_de_atencion.json")
            .then( response => {
                if(response.ok) {
                    resolve(response);
                }else {
                    reject("Error en la peticion http");
                }
            })
            .catch( error => console.log(error));            
    })
}
function cargarCentros() {
    obtenerCentros()
        .then(response => response.json())
        .then( centros => {
            centros.forEach( centro => {
                const opcion = document.createElement("option");
                opcion.value = `${centro.id}`;
                opcion.textContent = `${centro.nombre}`
                lista_select.appendChild(opcion);
            })
        })
        .catch( error => console.log(error));
    
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
    cargarCentros();
}

document.addEventListener("DOMContentLoaded", listeners);
lista_select.addEventListener("change", actualizarIframe);