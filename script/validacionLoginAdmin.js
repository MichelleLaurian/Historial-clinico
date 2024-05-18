// variables
const form_login_admin = document.querySelector(".form_login_admin")
const userInput = document.querySelector(".userInput");
const passInput = document.querySelector(".passwordInput");
const btn_login = document.querySelector(".btn_login");

userInput.addEventListener("input", varidarInput);
passInput.addEventListener("input", varidarInput);

function varidarInput(e){
    const valor = e.target.value;
   
    if(valor.trim() == "") {
        mostrarAlerta("Campo obligatorio", "error", e);
    }
}

function mostrarAlerta(mensaje, tipo, e) {

    limpiarAlertas(e);

    if(tipo == "error"){
        const alerta = document.createElement("div");
        alerta.classList.add("errorMessage");
        alerta.textContent = mensaje;

        e.target.parentElement.appendChild(alerta);

        setTimeout(() => {
            alerta.remove();
        }, 2000);
    }
}

function limpiarAlertas(e) {
    const errorMessage = e.target.nextElementSibling;

    if(errorMessage){
        errorMessage.remove();
    }
}

