import genCard from "./generate-cards.js"

const asideCont = document.getElementById('asideCont')
const asideCards = document.createElement('div')
asideCards.classList.add('aside-cards')

// generate news on aside section
const generateAsideNews = function() {
    const cardsAmount = 5
    const card = genCard(cardsAmount)

    card.forEach(cd => {
        cd.classList.add('card-w')
        asideCards.appendChild(cd)
    })

    asideCont.appendChild(asideCards)
}

generateAsideNews()