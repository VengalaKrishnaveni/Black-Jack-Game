let isAlive = false
let isBlackjack = false
let message = document.getElementById('msg-el')
let cardsEl = document.getElementById('cards-el')
let sumEl = document.getElementById('sum-el')
let player = {
    name: 'Marcus',
    chips: 145
}
let playerNameEl = document.getElementById('playerName-el')
let playerChipsEl = document.getElementById('playerChips-el')
let cards = []
let sum = 0

playerNameEl.textContent = "Player Name: " + player.name
playerChipsEl.textContent = "Player Chips: " + "$"+player.chips
function generateRandom(){
    let r = Math.floor(Math.random()*13) + 1
    if (r>10){
        return 10
    }
    else if (r===1){
        return 11
    }    
    else{
        return r
    }
}

function startGame(){
    isAlive = true
    let firstCard = generateRandom()
    let secondCard = generateRandom()
    cards = [firstCard,secondCard]
    sum = cards[0] + cards[1]
    process()
}

function process(){
    cardsEl.textContent = "Cards: "
    for(let i=0; i<cards.length;i++){
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: "+sum
    if(sum>21){
        message.textContent = "You are out of the game!"
        isAlive = false
        player.chips += 5
        playerChipsEl.textContent = "Player Chips: " + "$"+player.chips
    }
    else if(sum<21){
        message.textContent = "Do you wanna draw a new card?"
    }
    else{
        message.textContent = "You got BlackJacked!"
        isBlackjack = true
        player.chips += 50
        playerChipsEl.textContent = "Player Chips: " + "$"+player.chips
    }
}

function newCard(){
    if(isAlive===true && isBlackjack===false){
        let card = generateRandom()
        cards.push(card)
        sum += card
        process()
    }
    else{
        message.textContent = "Start a New Game!"
        isBlackjack = false
        cardsEl.textContent = "Cards: "
        sumEl.textContent = "Sum: "
    }
}

console.log(isAlive)
console.log(isBlackjack)