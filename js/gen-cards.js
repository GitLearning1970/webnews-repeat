let cardNum = 0
function generateCards(amount) {
    const card = []
    const cardImg = []
    const cardBody = []
    const cardTitle = []
    const cardFooter = []
    const cardCategory = []
    const cardDate = []
    
    for (let j = 0; j < amount; j++) {
        // cards
        card[j] = document.createElement('div')
        card[j].classList.add('card')

        cardNum++
        // image
        cardImg[j] = document.createElement('img')
        cardImg[j].src = `https://picsum.photos/200?random=${cardNum}`
        cardImg[j].classList.add('card-img')
        // body
        cardBody[j] = document.createElement('div')
        cardBody[j].classList.add('card-body')
        // title
        cardTitle[j] = document.createElement('h4')
        cardTitle[j].classList.add('card-title')
        cardTitle[j].innerText = `Title ${cardNum}`
        // footer
        cardFooter[j] = document.createElement('div')
        cardFooter[j].classList.add('card-footer')
        // category
        cardCategory[j] = document.createElement('p')
        cardCategory[j].innerText = 'category'
        cardCategory[j].classList.add('card-category')
        // date
        cardDate[j] = document.createElement('p')
        cardDate[j].innerText = 'MM / DD / YYYY'
        cardDate[j].classList.add('card-date')

        cardBody[j].appendChild(cardTitle[j])
        cardFooter[j].append(cardCategory[j], cardDate[j])
        card[j].append(cardImg[j], cardBody[j], cardFooter[j])
    }
    return card
}

export default generateCards