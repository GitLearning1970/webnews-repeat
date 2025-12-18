let cardNum = 0
function generateCards(amount) {
    const card = []
    const img = []
    const body = []
    const title = []
    const footer = []
    const label = []
    const time = []

    for (let j = 0; j < amount; j++) {
        // cards
        card[j] = document.createElement('article')
        card[j].classList.add('card')
        // images
        cardNum++
        img[j] = document.createElement('img')
        img[j].src = `https://picsum.photos/200?random=${cardNum}`
        img[j].classList.add('card-img')
        // body
        body[j] = document.createElement('div')
        body[j].classList.add('card-body')
        // title
        title[j] = document.createElement('h4')
        title[j].classList.add('card-title')
        title[j].innerText = `Title ${cardNum}`
        // footer
        footer[j] = document.createElement('div')
        footer[j].classList.add('card-footer')
        // label
        label[j] = document.createElement('span')
        label[j].classList.add('card-label')
        label[j].innerText = 'label'
        // time
        time[j] = document.createElement('span')
        time[j].classList.add('card-time')
        time[j].innerText = 'DD / MM / YYYY'

        body[j].appendChild(title[j])
        footer[j].append(label[j], time[j])
        card[j].append(img[j], body[j], footer[j])
    }

    return card
}

export default generateCards