import rand from "./randomInt.js"
import genCards from "./generate-cards.js"

const main = document.querySelector('main')
const news = document.createElement('section')
news.classList.add('news')
// generating news
function generateNews() {
    const row = []
    const rowsAmount = 8
    
    for (let i = 0; i < rowsAmount; i++) {
        // rows
        row[i] = document.createElement('div')
        row[i].classList.add('row', 'wb-d-flex')
        
        // amount of cards
        const cardsAmount = rand(3, 5)
        const card = genCards(cardsAmount)

        card.forEach(cd => row[i].appendChild(cd))

        switch (cardsAmount) {
            case 3:{ // if amount of cards is 3
                let num, indexCard
                for (let j = 0; j < 2; j++) {
                    while (num == indexCard) {
                        indexCard = rand(0, 2)
                    }
                    card[indexCard].classList.add('card-w')
                    num = indexCard
                }
                break
            }
            case 4: // if amount of cards is 4
                let indexCard = rand(0, 3)
                card[indexCard].classList.add('card-w')
                break
            default: // if amount of cards is 5
                break
        }
        news.appendChild(row[i])
    }
    main.appendChild(news)
}

generateNews()