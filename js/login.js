const loginBtn = document.querySelector('.login-btn')
const loginClose = document.querySelector('.close')
const loginScreen = document.querySelector('.modal-login')
// open login screen
loginBtn.addEventListener('click', () => loginScreen.showModal())
// close login screen
loginClose.addEventListener('click', () => loginScreen.close())