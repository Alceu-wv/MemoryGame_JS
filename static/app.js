const deck = [
    {
        name: "Darlan",
        img: "../images/darlan.jpg"
    },
    {
        name: "Ange",
        img: "../images/ange.jpg"
    },
    {
        name: "Milena",
        img: "../images/milena.jpg"
    },
    {
        name: "Alceu",
        img: "../images/alceu.jpg"
    },
    {
        name: "DarlanInsta",
        img: "../images/darlaninsta.jpg"
    },
    {
        name: "AngeInsta",
        img: "../images/angeinsta.jpg"
    },
    {
        name: "MilenaInsta",
        img: "../images/milenainsta.jpg"
    },
    {
        name: "AlceuInsta",
        img: "../images/alceuinsta.jpg"
    },
    {
        name: "Darlan",
        img: "../images/darlan.jpg"
    },
    {
        name: "Ange",
        img: "../images/ange.jpg"
    },
    {
        name: "Milena",
        img: "../images/milena.jpg"
    },
    {
        name: "Alceu",
        img: "../images/alceu.jpg"
    },
    {
        name: "DarlanInsta",
        img: "../images/darlaninsta.jpg"
    },
    {
        name: "AngeInsta",
        img: "../images/angeinsta.jpg"
    },
    {
        name: "MilenaInsta",
        img: "../images/milenainsta.jpg"
    },
    {
        name: "AlceuInsta",
        img: "../images/alceuinsta.jpg"
    },
];

const board = document.querySelector("#board");
var startTime = Date.now();
var points = 0
var choosenCards = []

function createGame(){
    startTime = null
    deck.sort(()=>{
        return 0.5 - Math.random();
    })
    for(let i = 0; i < deck.length; i++){
        let card = document.createElement("img")
        card.id = i
        card.data = deck[i].name
        card.src = "../images/logo.png"
        card.addEventListener("click", chooseCard)
        board.appendChild(card)
    }
};

function chooseCard(){
    if(!startTime){
        alert("Clique em Começar para iniciar o jogo!")
        return
    }
    let card = this;
    card.src = deck[card.id].img
    choosenCards.push(card)

    if(choosenCards.length == 2){

        setTimeout(() =>{
            let card1 = choosenCards[0]
            let card2 = choosenCards[1]

            if(card1.data == card2.data){
                card1.src = "../images/white.png"
                card2.src = "../images/white.png"
                card1.removeEventListener("click", chooseCard)
                card2.removeEventListener("click", chooseCard)
                points += 1
            }else{
                card1.src = "../images/logo.png"
                card2.src = "../images/logo.png"
            }
            if(points == deck.length /2){
                spentTime = (Date.now() - startTime) /1000
                alert(`Parabéns!!! Você terminou o jogo em ${spentTime} segundos`)
                refreshScore(spentTime)
                points = 0
            }
            choosenCards = []
        }, 500)
    }
}

function restartGame() {
    board.innerHTML = ""
    createGame()
}

function refreshScore(score) {
    let record = document.querySelector("#record").innerText
    if(record == "Quão rápido você consegue descobrir todos os pares?" || parseInt(record) > score){
        document.querySelector("#record").innerText = score.toString()
    }
}

function startGame(){
    if(!startTime){
        startTime = Date.now() 
        let board = document.querySelector("#board").childNodes
        for(let i = 0; i < board.length; i++){
            let deckCard = deck.find(obj => {
                return obj.name === board[i].data
            })
            board[i].src = deckCard.img
        }
        setTimeout(() => {
            for(let i = 0; i < board.length; i++){
                board[i].src = "../images/logo.png"
            }
        }, 2000)
    }else{
        alert("O jogo já iniciou, embaralhe as cartas para recomeçar")
    }
}
