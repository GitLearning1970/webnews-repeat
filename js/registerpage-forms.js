const link = document.querySelectorAll('.link')
// form links
link.forEach(l => l.addEventListener('click', () => changeDisplay()))
// function to change the visibility of forms
function changeDisplay() {
    const form = document.querySelectorAll('form')
    let register = form[0].style
    let login = form[1].style
    
    if (register.display == 'block') {
        register.display = 'none'
        login.display = 'block'
    } else {
        login.display = 'none'
        register.display = 'block'
    }
}