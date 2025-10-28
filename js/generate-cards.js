let cardNum = 0
const generateCards = function(amount) {
    const card = []
    const cardImg = []
    const cardBody = []
    const cardBodyTitle = []
    const cardFooter = []
    const cardFooterCategory = []
    const cardFooterDate = []

    for (let j = 0; j < amount; j++) {
        cardNum++
        // generate cards
        card[j] = document.createElement('div')
        card[j].classList.add('card')
        // generate images
        cardImg[j] = document.createElement('img')
        cardImg[j].classList.add('card-img')
        cardImg[j].src = `./res/image-example.jpg`
        // generate card bodies
        cardBody[j] = document.createElement('div')
        cardBody[j].classList.add('card-body')
        // generate card titles
        cardBodyTitle[j] = document.createElement('h4')
        cardBodyTitle[j].classList.add('card-body-title')
        cardBodyTitle[j].innerText = `Title ${cardNum}`
        // generate card footers
        cardFooter[j] = document.createElement('div')
        cardFooter[j].classList.add('card-footer', 'wn-d-flex')
        // generate card categories
        cardFooterCategory[j] = document.createElement('p')
        cardFooterCategory[j].classList.add('card-footer-category')
        cardFooterCategory[j].innerText = 'category'
        // generate card posting date
        cardFooterDate[j] = document.createElement('p')
        cardFooterDate[j].classList.add('card-footer-date')
        cardFooterDate[j].innerText = 'DD / MM / AAAA'

        // append each title to each body of a card
        cardBody[j].appendChild(cardBodyTitle[j])
        // append each category and posting date to each footer of a card
        cardFooter[j].append(cardFooterCategory[j], cardFooterDate[j])
        // append each image, body and footer to each card
        card[j].append(cardImg[j], cardBody[j], cardFooter[j])
    }

    return card
}

export default generateCards