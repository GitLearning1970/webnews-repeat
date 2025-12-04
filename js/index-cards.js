import rand from "./randInt.js"
import genCard from "./gen-cards.js"

const main = document.querySelector('main')
const news = document.createElement('div')
news.classList.add('news')

function mainNews() {
    const row = []
    const rowsAmount = 8

    // create rows
    for (let i = 0; i < rowsAmount; i++) {
        row[i] = document.createElement('div')
        row[i].classList.add('news-row')

        const cardsAmount = rand(3, 5)
        
        // create cards
        const card = genCard(cardsAmount)
        
        // put all cards on rows
        card.forEach(cd => row[i].appendChild(cd))
        
        /* increase some cards size
            based on amount of cards */
        switch (cardsAmount) {
            case 3: {
                let num, indexCard
                for (let i = 0; i < 2; i++) {
                    while (indexCard == num) {
                        indexCard = rand(0, 2)
                    }
                    num = indexCard
                    card[indexCard].classList.add('card-w')
                }
                break
            }
            case 4:
                let indexCard = rand(0, 3)
                card[indexCard].classList.add('card-w')
                break
            default:
                break
        }
        news.appendChild(row[i])
    }
    main.appendChild(news)
}

mainNews()