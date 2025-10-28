import rand from "./random-int.js"
import genCards from "./generate-cards.js"

const main = document.getElementById('newsCards')
const news = document.createElement('div')
news.classList.add('news')

// function to generate news
const generateNews = function() {
    const row = []
    const rowsAmount = 8

    // generate rows
    for (let i = 0; i < rowsAmount; i++) {
        row[i] = document.createElement('div')
        row[i].classList.add('row', 'wn-d-flex')
        // number of cards to be generated between 3 and 5
        const cardsAmount = rand(3, 5)
        const card = genCards(cardsAmount)

        card.forEach(cd => row[i].appendChild(cd))

        switch (cardsAmount) {
            case 3: { // if the ser of cards is 3
                let num, indexCard
                for (let j = 0; j < 2; j++) {
                    while(num == indexCard) {
                        indexCard = rand(0, 2)
                    }
                    card[indexCard].classList.add('card-w')
                    num = indexCard
                }
                break
            }
            case 4: // if the set of cards is 4
                let indexCard = rand(0, 3)
                card[indexCard].classList.add('card-w')
                break
            default: // if the set of cards is 5
                break
        }
        news.appendChild(row[i])
    }
    main.appendChild(news)
}

generateNews()