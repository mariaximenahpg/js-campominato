// Ciao ragazzi,
// Esercizio di oggi: Campo Minato
// nome repo: js-campominato
// Consegna
// Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).
// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
// Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
// - difficoltà 1 ⇒ 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// - difficoltà 2 ⇒ 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// - difficoltà 3 ⇒ 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

const gameStart = document.querySelector(".btn-play");
const boardContainer = document.querySelector(".board");
let start = 1;
let squareNumber = 100;
const score = document.querySelector(".score")
let bombs = [];
let count = 0;

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

function randomBombs(min,max) {
    const bombs = [];
    while (bombs.length !== 16) {
        const randomBomb = randomNumber(min,max);
        if (!bombs.includes(randomBomb)) {
        bombs.push(randomBomb)
       }
    }
    return bombs;
}

gameStart.addEventListener('click', function () {
    boardContainer.innerHTML = "";
    score.innerHTML = "";

    let mode = document.querySelector("select").value;
    console.log(mode);

    if (mode === "1") {
        start = 1;
        squareNumber = 100;
        bombs = randomBombs(start,squareNumber);
        console.log(bombs);
    } else if (mode === "2") {
        start = 1;
        squareNumber = 81;
        bombs = randomBombs(start,squareNumber);
        console.log(bombs);
    } else{
        start = 1;
        squareNumber = 49;
        bombs = randomBombs(start,squareNumber);
        console.log(bombs);
    } function boardCreate(min, max) {
        for (let i = min; i <= max; i++) {
            const boardSquare = document.createElement("div");
            boardSquare.classList.add("square")
            boardSquare.innerHTML = [i]
            boardContainer.insertAdjacentElement("beforeend",boardSquare);

            if (mode === "1") {
                boardSquare.classList.add('easy_board');
            } else if (mode === "2") {
                boardSquare.classList.add('medium_board');
            } else{
                boardSquare.classList.add('hard_board');
            }

            boardSquare.addEventListener('click', function(){
                const cellNumber = Number(this.innerHTML);
                const bombed = bombs.includes(cellNumber);
                if (bombed) {
                    boardSquare.classList.add("game-over")
                    boardContainer.innerHTML = "Peccato,hai beccato una bomba :("
                    score.innerHTML = "Il tuo punteggio: "+ count;
                    return count=0
                } else{
                    boardSquare.classList.toggle("active")
                    count++
                }
            })           
        }           
    }
    boardCreate(start,squareNumber);
})

