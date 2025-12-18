import rand from "./randomInt.js"

const main = document.querySelector('main')
const news = document.createElement('section')
news.classList.add('news')
// generating news
function generateNews() {
    const row = []
    const card = []
    const rowsAmount = 8
    
    for (let i = 0; i < rowsAmount; i++) {
        // rows
        row[i] = document.createElement('div')
        row[i].classList.add('row')
        
        // amount of cards
        const cardsAmount = rand(3, 5)
        
        for (let j = 0; j < cardsAmount; j++) {
            // cards
            card[j] = document.createElement('article')
            card[j].classList.add('card')
            
            row[i].appendChild(card[j])
        }

        switch (cardsAmount) {
            case 3:{
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

generateNews()