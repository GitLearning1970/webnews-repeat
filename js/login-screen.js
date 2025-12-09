const loginBtn = document.querySelector('.login-btn')
const loginClose = document.querySelector('.close')
const loginScreen = document.querySelector('.modal-background').style
// open login screen
loginBtn.addEventListener('click', () => loginScreen.display = 'block')
// close login screen
loginClose.addEventListener('click', () => loginScreen.display = 'none')