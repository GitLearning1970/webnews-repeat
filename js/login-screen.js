const loginBtn = document.getElementById('loginBtn')
const loginClose = document.getElementById('closeLogin')
const login = document.getElementById('loginModal').style
// open login screen
loginBtn.addEventListener('click', () => login.display = 'block')
// close login screen
loginClose.addEventListener('click', () => login.display = 'none')