import rand from "./random-int.js"

const main = document.getElementById('newsCards')
const news = document.createElement('div')
news.classList.add('news')
// function to generate news
let cardImg = 0
const generateNews = function() {
    const row = []
    const card = []
    const img = []
    const cardBody = []
    const cardFooter = []

    const rowsAmount = 8
    // generate rows
    for (let i = 0; i < rowsAmount; i++) {
        row[i] = document.createElement('div')
        row[i].classList.add('row', 'wn-d-flex')
        // number of cards to be generated between 3 and 5
        const cardsAmount = rand(3, 5)
        for (let j = 0; j < cardsAmount; j++) {
            // generate cards
            card[j] = document.createElement('div')
            card[j].classList.add('card')
            // generate images
            cardImg++
            img[j] = document.createElement('img')
            img[j].src = `https://picsum.photos/200?random=${cardImg}`
            img[j].classList.add('card-img')
            // generate bodies
            cardBody[j] = document.createElement('div')
            cardBody[j].classList.add('card-body')
            cardBody[j].innerHTML = '<h4 class="card-body-title">Title</h4>'
            // generate footer
            cardFooter[j] = document.createElement('div')
            cardFooter[j].classList.add('card-footer', 'wn-d-flex')
            cardFooter[j].innerHTML = '<p class="card-footer-category">category</p>'
            cardFooter[j].innerHTML += '<p class="card-footer-date">DD / MM / AAAA</p>'
            /* append each set of images, card bodies
                and card footers to each card */
            card[j].append(img[j], cardBody[j], cardFooter[j])
            // append each set of cards to each row
            row[i].appendChild(card[j])
        }
        switch (cardsAmount) {
        // if the set of cards is 3
        case 3: {
            let num, indexCard
            for (let j = 0; j < 2; j++) {
                while(num == indexCard) {
                    indexCard = rand(0, 2)
                }
                card[indexCard].classList.add('card-w')
                num = indexCard
            }
            break
        }// if the set of cards is 3
        case 4:
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