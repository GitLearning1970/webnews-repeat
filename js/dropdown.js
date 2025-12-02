const dropBtn = document.querySelector('.dropdown-btn')
const dropCont = document.querySelector('.dropdown-content').style
// open and close dropdown menu
dropBtn.addEventListener('click', () => dropCont.display != 'block' ? dropCont.display = 'block' : dropCont.display = 'none')