const formSingIn = document.querySelector('form')
const userSingIn = document.querySelector('#user')
const passSingIn = document.querySelector('#passUser')
const errorMessage = document.querySelector('.errorMessage')


formSingIn.addEventListener('submit', validacionSingIn)

function validacionSingIn(e) {
  e.preventDefault()

  const data = Object.fromEntries(
    new FormData(e.target)
  )
  console.log(JSON.stringify(data))

  if (!userSingIn.value === 'Admin' || userSingIn.value === '') {
    errorMessage.textContent = 'El usuario es necesario'
  } else if (!passSingIn.value === 'Admin' || passSingIn.value === '') {
    errorMessage.textContent = 'La contraseña es necesaria.'
    
  }

  window.location.href = '/index.html'

}

