const form = document.querySelectorAll('form')
const formLink = document.querySelectorAll('.link')
// close register screen and open login screen
formLink[0].addEventListener('click', () => {
    form[0].style.display = 'none'
    form[1].style.display = 'block'
})
// opposite logic
formLink[1].addEventListener('click', () => {
    form[0].style.display = 'block'
    form[1].style.display = 'none'
})