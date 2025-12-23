import genCards from "./generate-cards.js"
// generate news
function generateNews() {
    // get aside tag
    const aside = document.querySelector('.aside-content')
    // create aside news
    const asideNews = document.createElement('div')
    asideNews.classList.add('aside-news')

    const cardsAmount = 5
    // generate cards
    const card = genCards(cardsAmount)

    card.forEach(cd => asideNews.appendChild(cd))
    aside.appendChild(asideNews)
}

generateNews()