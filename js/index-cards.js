import rand from "./randomInt.js"

const main = document.querySelector('main')
const news = document.createElement('section')
news.classList.add('news')
// generating news

let cardNum = 0
function generateNews() {
    const row = []
    const card = []
    const img = []
    const body = []
    const footer = []
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

            // images
            cardNum++
            img[j] = document.createElement('img')
            img[j].src = `https://picsum.photos/200?random=${cardNum}`
            img[j].classList.add('card-img')

            // body
            body[j] = document.createElement('div')
            body[j].classList.add('card-body')
            body[j].innerHTML = `<h4 class="card-title">Title ${cardNum}</h4>`

            // footer
            footer[j] = document.createElement('div')
            footer[j].classList.add('card-footer')
            footer[j].innerHTML = '<span class="card-label">label</span>'
            footer[j].innerHTML += '<span class="card-time">DD / MM / YYYY</span>'

            card[j].append(img[j], body[j], footer[j])
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