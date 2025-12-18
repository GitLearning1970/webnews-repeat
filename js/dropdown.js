const dropBtn = document.querySelector('.dropdown-btn')
const dropCont = document.querySelector('.dropdown-content').style
// open and close dropdown menu list
dropBtn.addEventListener('click', () => dropCont.display != 'block' ? dropCont.display = 'block' : dropCont.display = 'none')
// close dropdown menu list
addEventListener('click', (ev) => {
    if (!ev.target.matches('.dropdown-btn')) {
        if (dropCont.display == 'block') {
            dropCont.display = 'none'
        }
    }
})