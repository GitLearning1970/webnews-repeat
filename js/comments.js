const commentSec = document.querySelector('.comment')
const commentBtn = document.querySelector('.comment-btn')
const commentTitle = document.querySelector('.comment-title-text')
const counter = document.createElement('span')
counter.innerText = ` (${0})`

commentTitle.appendChild(counter)

// create container for comments
const container = document.createElement('div')
container.classList.add('comment-container')
// put container on section
commentSec.appendChild(container)

let user = 0
commentBtn.addEventListener('click', () => {
    const d = new Date()
    const month = d.getMonth()+1 // month
    const day = d.getDate() // day
    const year = d.getFullYear() // year
    const hour = d.getHours() // hours
    const minutes = d.getMinutes() // minutes
    // comment field
    const field = document.querySelector('#commentField')
    
    if (field.value.length > 0) {
        // create comment
        const comment = document.createElement('article')
        comment.classList.add('comment-set', 'd-flex')
        // user photo
        const photo = document.createElement('i')
        photo.classList.add('fa-solid', 'fa-user')
        // username and date 
        const text = document.createElement('div')
        text.classList.add('comment-text')
        // comment data
        user++
        const data = document.createElement('div')
        data.classList.add('comment-text-data', 'd-flex')
        data.innerHTML = `<p>user${user}</p>`
        data.innerHTML += `<span>${month} / ${day} / ${year} - ${hour}:${minutes}</span>`
        // comment text
        const p = document.createElement('p')
        p.classList.add('comment-text-p')
        p.innerText = field.value

        text.append(data, p)
        comment.append(photo, text)
        container.appendChild(comment)
    }
    // update comments counter
    counter.innerText = ` (${container.childNodes.length})`
    
    field.value = ''
})