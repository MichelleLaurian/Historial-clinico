
const formSignin = document.querySelector('form')
const nameContact = document.querySelector('#name')
const emailContact = document.querySelector('#email')
const phoneContact = document.querySelector('#phone')
const asunto = document.querySelector('#asunto')
const description = document.querySelector('#description')
const fileUpload = document.querySelector('#file-upload')

const errorMessageName = document.querySelector('#errorMessageName')
const errorMessageMail = document.querySelector('#errorMessageMail')

const errorMessagePhone = document.querySelector('#errorMessagePhone')
const errorMessageAsunto = document.querySelector('#errorMessageAsunto')
const errorMessageComent = document.querySelector('#errorMessageComent')
const errorMessagefile = document.querySelector('#errorMessagefile')

function timer(errorV) {
  setTimeout(() => {
    errorV.textContent = "";
  }, 2000);
}

let reEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/

formSignin.addEventListener('submit', validationFormContact)

function validationFormContact (e) {
  e.preventDefault()

  if (nameContact.lenght < 10 || nameContact.value=== '') {
    errorMessageName.textContent = 'El nombre es requerido'
    timer(errorMessageName)
  }
  if (emailContact.value === "") {
    errorMessageMail.textContent = 'El e-mail es requerido'
    timer(errorMessageMail)

  } 
  if (phoneContact.value == null || phoneContact.value <= 9) {
    errorMessagePhone.textContent = 'El número de celular es requerido'
    timer(errorMessagePhone)
  }

  if (asunto.value === ''|| asunto.value.length< 10) {
    errorMessageAsunto.textContent = 'Este campo es requerido'
    timer(errorMessageAsunto)
    
  }
  if (description.value === '' || description.value.lenght < 25) {
    errorMessageComent.textContent = 'Necesitas al menos 25 caracteres'
    timer(errorMessageComent)
    
  }
  
  let filePath = fileUpload.value;
  let allowedExtensions = /(\.doc|\.docx|\.pdf)$/i;

  if (!allowedExtensions.exec(filePath)) {
    errorMessagefile.textContent = 'El archivo debe ser formato PDF'
    fileUpload.value = ''
    timer(errorMessagefile)

  }
  
}
